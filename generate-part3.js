require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
// 模型选择：gemini-1.5-flash 有独立配额，不与 2.x 共享
const MODEL_NAME = 'models/gemini-3-flash-preview';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dataDir = path.join(__dirname, 'almanack_data');
const outputDir = path.join(__dirname, 'almanack_out');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const PART3_SOURCES = [
    "家庭教育与成长_nuggets.json",
    "情感与生活随笔_nuggets.json"
];

const BASE_PROMPT = `
你是一位顶级传记编辑（如Eric Jorgenson，编撰过《纳瓦尔宝典》）。你目前正在为著名博主"星佳"编撰他的首本思想语录集——《星佳宝典》第三篇：生活与幸福。
本次传入的是星佳在家庭、情感、生活主题下的**碎片语录提取集**。

**你的任务：**
将这些碎片化的高亮、金句、引言提炼并重组成为1-3篇连贯的、极简的、极具洞察力的短文（作为整体宝典的一个小章节）。

**排版与语调要求：**
1. **必须使用星佳本人的第一人称"我"**。就像星佳在面对读者娓娓道来。
2. 剔除网络水文感、无用口水话，**每一段话都必须直击事物本质**。
3. 把相似观点的碎句无痕糅合在一起。
4. 使用 Markdown 格式。对于你认为极其核心的观念（比如打破认知的金句），请使用 **加粗**。
5. 请提炼出1到3个具有高度概括性的小标题 (使用 ### 级别)。
6. 切忌以"你好"、"今天讲讲"等机械感词汇开头。直接给出重组后的干货内容。
7. 重点主题：家庭经营、夫妻关系、孩子教育、生活感悟、选择与幸福。

**以下是这批待处理的语录碎片：**
`;

// 每次送给 API 的文章篇数上限（缩小以减少 token 消耗）
const CHUNK_SIZE = 20;
// 两次请求间隔（毫秒）- 提高到 15 秒，宽松速率
const DELAY_MS = 15000;
// Rate Limit 触发时的等待时长（毫秒）
const RATE_LIMIT_DELAY_MS = 60000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateSection(snippetsText, retryCount = 0) {
    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: BASE_PROMPT + '\n' + snippetsText,
            config: {
                temperature: 0.65,
                top_p: 0.95
            }
        });
        return response.text;
    } catch (e) {
        const isRateLimit = e.message && (
            e.message.includes('429') ||
            e.message.includes('RESOURCE_EXHAUSTED') ||
            e.message.includes('quota') ||
            e.message.includes('rate')
        );

        if (retryCount < 4) {
            const waitTime = isRateLimit ? RATE_LIMIT_DELAY_MS : 12000;
            console.warn(`\n  ⚠️  请求失败 (${e.message.substring(0, 80)}...)`);
            console.warn(`  → 等待 ${waitTime / 1000} 秒后重试... (第 ${retryCount + 1}/4 次重试)`);
            await sleep(waitTime);
            return generateSection(snippetsText, retryCount + 1);
        } else {
            console.error(`\n  ❌ 模型请求最终失败（已重试4次）：${e.message}`);
            return "\n\n> [本段内容生成失败，请后续手动补偿]\n\n";
        }
    }
}

async function buildPart3() {
    const outPath = path.join(outputDir, 'Part3_Happiness.md');

    console.log("🚀 启动《星佳宝典》第三篇——生活与幸福 重新生成任务");
    console.log("📝 策略：每批次实时追加写入，防止中途失败丢失已生成内容\n");

    // 初始化文件，写入标题
    fs.writeFileSync(outPath, '# 第三篇：生活与幸福 (Life & Happiness)\n\n', 'utf8');
    let totalChunks = 0;
    let successChunks = 0;

    for (const sourceFile of PART3_SOURCES) {
        const filePath = path.join(dataDir, sourceFile);
        if (!fs.existsSync(filePath)) {
            console.warn(`[跳过] 未找到文件：${sourceFile}`);
            continue;
        }

        const categoryName = sourceFile.replace('_nuggets.json', '');
        console.log(`\n============================`);
        console.log(`📂 处理分类：${categoryName}`);
        console.log(`============================`);

        const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log(`  共 ${rawData.length} 篇文章`);

        for (let i = 0; i < rawData.length; i += CHUNK_SIZE) {
            const chunk = rawData.slice(i, i + CHUNK_SIZE);
            let snippetsText = '';

            chunk.forEach(post => {
                if (post.bold_statements && post.bold_statements.length > 0) {
                    // 过滤掉纯"持续记录"之类的模板文本
                    const filtered = post.bold_statements.filter(s =>
                        s.length > 10 &&
                        !s.includes('持续记录从宁夏') &&
                        !s.includes('这是星佳和爱米的第') &&
                        !s.includes('xingjia10086') &&
                        !s.includes('微信号')
                    );
                    if (filtered.length > 0) snippetsText += `\n【重要断言】 ${filtered.join(' | ')}`;
                }
                if (post.blockquotes && post.blockquotes.length > 0) {
                    const filtered = post.blockquotes.filter(s =>
                        s.length > 15 &&
                        !s.includes('公众号：星佳是个小人物') &&
                        !s.includes('http') &&
                        !s.includes('mmbiz') &&
                        !s.includes('长按识别')
                    );
                    if (filtered.length > 0) snippetsText += `\n【引用语录】 ${filtered.slice(0, 5).join(' | ')}`;
                }
                if (post.key_paragraphs) {
                    post.key_paragraphs.forEach(p => {
                        snippetsText += `\n【论述段落 - ${p.heading}】 ${p.point}`;
                    });
                }
            });

            totalChunks++;
            const chunkLabel = `第 ${i + 1}~${Math.min(i + CHUNK_SIZE, rawData.length)} 篇`;

            if (snippetsText.length > 80) {
                process.stdout.write(`  [${chunkLabel}] 送入大模型... `);
                const generatedText = await generateSection(snippetsText);

                if (!generatedText.includes('[本段内容生成失败')) {
                    successChunks++;
                    // 实时追加写入，每批成功立即保存
                    fs.appendFileSync(outPath, generatedText + '\n\n***\n\n', 'utf8');
                    process.stdout.write(`✅\n`);
                } else {
                    // 失败的也写入，但标记清楚
                    fs.appendFileSync(outPath, `\n> [批次 ${chunkLabel} 生成失败]\n\n***\n\n`, 'utf8');
                    process.stdout.write(`❌ (已记录占位符)\n`);
                }

                await sleep(DELAY_MS);
            } else {
                console.log(`  [${chunkLabel}] 有效内容不足，跳过`);
                totalChunks--; // 不计入统计
            }
        }
    }

    const finalSize = fs.statSync(outPath).size;
    console.log(`\n========================================`);
    console.log(`🎉 第三篇生成完毕！`);
    console.log(`   成功批次：${successChunks} / ${totalChunks}`);
    console.log(`   文件大小：${(finalSize / 1024).toFixed(1)} KB`);
    console.log(`   输出路径：${outPath}`);
    console.log(`========================================`);
}

buildPart3().catch(e => {
    console.error('脚本运行出错：', e);
    process.exit(1);
});

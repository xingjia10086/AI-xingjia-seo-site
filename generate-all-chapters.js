require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dataDir = path.join(__dirname, 'almanack_data');
const outputDir = path.join(__dirname, 'almanack_out');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 宝典三大篇章的结构映射表
const BOOK_STRUCTURE = {
    "Part1_Wealth": {
        title: "第一篇：财富与套利 (Wealth & Arbitrage)",
        sources: ["商业创业与自媒体_nuggets.json", "香港身份与生活_nuggets.json", "深圳居住与买房_nuggets.json", "常旅客与信用卡_nuggets.json"]
    },
    "Part2_Mindset": {
        title: "第二篇：心智与成长 (Mindset & Growth)",
        sources: ["前沿科技与工具_nuggets.json", "其他与日常_nuggets.json"]
    },
    "Part3_Happiness": {
        title: "第三篇：生活与幸福 (Life & Happiness)",
        sources: ["家庭教育与成长_nuggets.json", "情感与生活随笔_nuggets.json"]
    }
};

const BASE_PROMPT = `
你是一位顶级传记编辑（如Eric Jorgenson，编撰过《纳瓦尔宝典》）。你目前正在为著名博主“星佳”编撰他的首本思想语录集——《星佳宝典》。
本次传入的是星佳在特定主题下的几篇博客的**碎片语录提取集**。

**你的任务：**
将这些碎片化的高亮、金句、引言提炼并重组成为1-3篇连贯的、极简的、极具洞察力的短文（作为整体宝典的一个小章节）。

**排版与语调要求：**
1. **必须使用星佳本人的第一人称“我”**。就像星佳在面对读者娓娓道来。
2. 剔除网络水文感、无用口水话，**每一段话都必须直击事物本质**。
3. 把相似观点的碎句无痕糅合在一起。
4. 使用 Markdown 格式。对于你认为极其核心的观念（比如打破认知的金句），请使用 **加粗**。
5. 请提炼出1到3个具有高度概括性的小标题 (使用 ### 级别)。
6. 切忌以“你好”、“今天讲讲”等机械感词汇开头。直接给出重组后的干货内容。

**以下是这批待处理的语录碎片：**
`;

// 每次送给 API 的文章篇数上限，避免 Token 超长或输出被过早截断
const CHUNK_SIZE = 30;
// 两次请求间隔，避免触发 API Rate Limit (毫秒)
const DELAY_MS = 3000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateSection(snippetsText, retryCount = 0) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: BASE_PROMPT + '\n' + snippetsText,
            config: {
                temperature: 0.6,
                top_p: 0.95
            }
        });
        return response.text;
    } catch (e) {
        if (retryCount < 3) {
            console.warn(`API 请求受阻，等待 10 秒后重试... (Attempt ${retryCount + 1}/3)`);
            await sleep(10000);
            return generateSection(snippetsText, retryCount + 1);
        } else {
            console.error('模型请求最终失败：', e.message);
            return "\n\n> [本段内容生成失败，请后续手动补偿]\n\n";
        }
    }
}

async function buildBook() {
    console.log("🚀 正式启动《星佳宝典》全量流水线...");

    for (const [partKey, partData] of Object.entries(BOOK_STRUCTURE)) {
        console.log(`\n============================`);
        console.log(`正在合成大部头 -> ${partData.title}`);
        console.log(`============================`);

        let partContent = `# ${partData.title}\n\n`;
        const outPath = path.join(outputDir, `${partKey}.md`);

        for (const sourceFile of partData.sources) {
            const filePath = path.join(dataDir, sourceFile);
            if (!fs.existsSync(filePath)) {
                console.warn(`[跳过] 未找到文件：${sourceFile}`);
                continue;
            }

            console.log(`  --> 提取核心原料区: ${sourceFile.replace('_nuggets.json', '')}`);
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            // 将该类目下的文章数据分块处理
            for (let i = 0; i < rawData.length; i += CHUNK_SIZE) {
                const chunk = rawData.slice(i, i + CHUNK_SIZE);
                let snippetsText = '';

                chunk.forEach(post => {
                    if (post.bold_statements.length > 0) snippetsText += `\n【重要断言】 ${post.bold_statements.join(' | ')}`;
                    if (post.blockquotes.length > 0) snippetsText += `\n【引用语录】 ${post.blockquotes.join(' | ')}`;
                    post.key_paragraphs.forEach(p => { snippetsText += `\n【论述段落 - ${p.heading}】 ${p.point}` });
                });

                if (snippetsText.length > 50) {
                    process.stdout.write(`    [*] 正在将第 ${i + 1} ~ ${i + chunk.length} 篇原料送入大模型... `);
                    const generatedText = await generateSection(snippetsText);
                    partContent += generatedText + '\n\n***\n\n';
                    process.stdout.write(`成功！\n`);
                    await sleep(DELAY_MS);
                }
            }
        }

        // 把拼装好的大篇章写入独立 MD 文件
        fs.writeFileSync(outPath, partContent, 'utf8');
        console.log(`✅ ${partData.title} 生成完毕，已刻录至 ${partKey}.md！`);
    }

    console.log("\n🎉 《星佳宝典》三卷本初代手稿已全部拼装完成！");
}

buildBook();

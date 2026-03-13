require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // 需在 .env 中配置 API KEY

const inputPath = path.join(__dirname, 'almanack_data', '香港身份与生活_nuggets.json');
const outputDir = path.join(__dirname, 'almanack_out');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 设定极简且深刻的 Prompt，引导 AI 模拟《纳瓦尔宝典》的文风
const ALMANACK_PROMPT = `
作为资深的出版编辑和传记创作者（类似Eric Jorgenson），你的任务是将以下零散的博客碎片（选材自作者星佳多年的原创文章），重新解构、合并、萃取出核心的智慧。

**写作风格要求：**
1. 语录体、极简、一针见血。抛弃一切废话和客套的引入（如“大家好”、“今天写这篇”等）。
2. 每段只讲透一个核心道理。段落之间要有内在的逻辑递进，像高僧布道一样自然流畅。
3. 重点概念要敢于使用加粗表示，犹如《纳瓦尔宝典》中的排版形式。
4. 核心主题暂定为：【关于香港身份与阶层跃迁的隐形价值】。请将这些杂乱的语录围绕该主题梳理出3-5个小标题结构，将语录填进去。
5. 必须保持第一人称“我”，尽量保留星佳原文中犀利的措辞（如：孟母三迁、四个早点理论、六个国际化等），不要显得像机器生成的总结。

**输入素材（以下是被洗出的核心金句与段落摘要）：**
`;

async function generateDemoChapter() {
    console.log('读取抽取好的金句素材...');
    const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    // 为了防止 Demo 超出 token 上限，我们先取前 15 篇高质量文章里的素材
    let combinedSnippets = '';
    const sliceData = rawData.slice(0, 15);

    sliceData.forEach(post => {
        post.bold_statements.forEach(b => { combinedSnippets += `\n- [断言]: ${b}` });
        post.blockquotes.forEach(q => { combinedSnippets += `\n- [引言]: ${q}` });
        post.key_paragraphs.forEach(p => { combinedSnippets += `\n- [核心论述 - ${p.heading}]: ${p.point}` });
    });

    const fullPrompt = ALMANACK_PROMPT + '\n' + combinedSnippets;

    console.log('正在呼叫 Google Gemini 模型进行智力合成运算...');
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
            config: {
                temperature: 0.7,
                top_p: 0.95
            }
        });

        const generatedChapter = response.text;

        const outFilePath = path.join(outputDir, 'demo_chapter_hongkong.md');
        fs.writeFileSync(outFilePath, generatedChapter, 'utf8');

        console.log(`\n🎉 样章合成成功！已输出至：${outFilePath}`);
        console.log('请查阅生成质量，并在后续向全量篇章铺开。\n');

    } catch (error) {
        console.error('模型调用失败，请检查 .env 配置是否包含 GEMINI_API_KEY，或网络情况。', error);
    }
}

generateDemoChapter();

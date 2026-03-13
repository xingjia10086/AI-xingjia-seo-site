const fs = require('fs');
const path = require('path');

// 要扫描的文章根目录
const postsDirectory = path.join(__dirname, 'seo-site', 'src', 'content', 'posts');
// 输出 JSON 的目标目录
const outputDirectory = path.join(__dirname, 'almanack_data');

// 匹配加粗金句
const boldRegex = /\*\*([^*]+)\*\*/g;
// 匹配引用语录
const blockquoteRegex = /^>\s+(.+)$/gm;
// 提取 H2/H3 标题及其后的首段内容 (作为核心逻辑提炼)
const headingParagraphRegex = /^(#{2,3})\s+(.+)\n+([^#=\-\n].*)/gm;

let totalQuotes = 0;
const categorizedData = {};

function processMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // 解析 Frontmatter (简化版，无需依赖 gray-matter)
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return;

    let category = 'Uncategorized';
    let title = path.basename(filePath, '.md');

    // 粗略提取 category 和 title
    const categoryMatch = frontmatterMatch[1].match(/category:\s*(.+)/);
    if (categoryMatch) category = categoryMatch[1].trim()
        .replace(/^['"](.*)['"]$/, '$1') // 移除两端引号
        .replace(/>/g, '') // 移除意外的转义符 (防之前构建站点的历史遗留脏数据)
        .trim();

    const titleMatch = frontmatterMatch[1].match(/title:\s*['"]?([^'"]+)['"]?/);
    if (titleMatch) title = titleMatch[1].trim();

    // 摘取正文主体 (跳过 Frontmatter)
    const bodyMatch = content.split(/^---$/m);
    const body = bodyMatch.length > 2 ? bodyMatch.slice(2).join('---').trim() : content;

    const fileQuotes = {
        title: title,
        source: filePath,
        bold_statements: [],
        blockquotes: [],
        key_paragraphs: []
    };

    // 1. 提取所有加粗断言
    let match;
    while ((match = boldRegex.exec(body)) !== null) {
        let text = match[1].trim();
        // 过滤掉太短的无意义加粗词汇
        if (text.length > 10) {
            fileQuotes.bold_statements.push(text);
        }
    }

    // 2. 提取所有引用语录
    while ((match = blockquoteRegex.exec(body)) !== null) {
        let text = match[1].trim();
        if (text.length > 10 && !text.includes('[!NOTE]') && !text.includes('[!IMPORTANT]')) {
            fileQuotes.blockquotes.push(text);
        }
    }

    // 3. 提取 Hx 标题及其下方首个精华段落
    while ((match = headingParagraphRegex.exec(body)) !== null) {
        let headingLevel = match[1];
        let headingText = match[2].trim();
        let firstParagraph = match[3].trim();
        // 只保留真正有论述价值的段落，排除图片标签或超短纯文本
        if (firstParagraph.length > 30 && !firstParagraph.startsWith('![')) {
            fileQuotes.key_paragraphs.push({
                heading: headingText,
                point: firstParagraph
            });
        }
    }

    // 只有这篇文章有“干料”时，才计入我们的宝典原料库
    if (fileQuotes.bold_statements.length > 0 || fileQuotes.blockquotes.length > 0 || fileQuotes.key_paragraphs.length > 0) {
        if (!categorizedData[category]) categorizedData[category] = [];
        categorizedData[category].push(fileQuotes);
        totalQuotes += (fileQuotes.bold_statements.length + fileQuotes.blockquotes.length + fileQuotes.key_paragraphs.length);
    }
}

function runDeepExtraction() {
    console.log(`正在扫描 ${postsDirectory} 获取《星佳宝典》基础碎片素材...`);
    const files = fs.readdirSync(postsDirectory);

    files.forEach(file => {
        if (file.endsWith('.md')) {
            processMarkdownFile(path.join(postsDirectory, file));
        }
    });

    console.log('\n--- 扫描完成 ---');
    console.log(`总计提取高价值碎片(语录、金句、段落): ${totalQuotes} 条`);

    // 将矿石级数据写入 JSON
    for (const [category, articles] of Object.entries(categorizedData)) {
        // 净化 Windows 路径不支持的下划线字符等
        const safeCatName = category.replace(/[\/\\:*?"<>|]/g, "_");
        const outPath = path.join(outputDirectory, `${safeCatName}_nuggets.json`);
        // 保存带缩进的格式化 json 方便人类查阅
        fs.writeFileSync(outPath, JSON.stringify(articles, null, 2), 'utf8');
        console.log(`[成功输出集] -> ${safeCatName} : 共计 ${articles.length} 篇提纯素材`);
    }

    // 输出一个大盘点字典，供后续大模型拆分使用
    fs.writeFileSync(
        path.join(outputDirectory, 'almanack_meta_toc.json'),
        JSON.stringify(Object.keys(categorizedData), null, 2),
        'utf8'
    );
}

runDeepExtraction();

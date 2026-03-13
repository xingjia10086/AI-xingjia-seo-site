const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'almanack_out');
const outputFile = path.join(outputDir, 'xingjia_almanack_full.md');

const bookParts = [
    'Part1_Wealth.md',
    'Part2_Mindset.md',
    'Part3_Happiness.md'
];

const frontMatter = `---
title: 星佳宝典 (Xingjia's Almanack)
author: 星佳 (Xingjia)
subject: 财富、心智与生活的复利法则
keywords: [星佳, 创业, 财富, 认知, 孟母三迁, 香港优才]
---

<div align="center">
  <h1>《星佳宝典》</h1>
  <h2>财富、心智与生活的复利法则</h2>
  <br>
  <p><i>“一个小人物的孟母三迁之路与创业认知沉淀”</i></p>
  <br>
  <p><b>作者：星佳</b></p>
  <p><b>编撰由 AI 驱动</b></p>
  <br><br>
</div>

<div style="page-break-after: always;"></div>

# 序言：小人物的大时代

我是一个从大西北十八线小城市走到一线大城市的小人物。我深知这条路上的不易，从找工作、教育孩子，到投资理财、提升生活品质，我们这类人面临着无数挑战。但也正因如此，我坚信这是一个最好的时代，一个属于我们小人物的时代。

过去的无言以对和无可奈何，如今已成为历史。我们身处一个可以把握和选择命运的时代，**通过互联网的连接，我们这些小人物们正用才华和勇气，共同创造属于我们的大时代。**

这本书，脱胎于我过去十几年撰写的 1300 多篇博客文章和随笔。它并不是一本传统意义上连篇累牍的回忆录，而是经过提炼后的“智慧晶体”——那些关于财富的套利逻辑、关于心智的持续进化、以及关于家庭与幸福的深刻感悟。

我希望传递的，是听得懂的道理，用得上的知识。这本小书将分为三篇：
- **第一篇：财富与套利** —— 探讨如何在信息差中寻找空间，普通人如何通过身份规划、房产布局实现阶级跨越。
- **第二篇：心智与成长** —— 分享面对周期规律的态度、拥抱新技术的法则，以及在不确定性中保持精进的心法。
- **第三篇：生活与幸福** —— 关于家庭的“孟母三迁”、关于夫妻同心的共同创业、以及对“什么是好生活”的重塑。

独享不如众享。与你共勉。

—— 星佳

<div style="page-break-after: always;"></div>

## 目录
- [第一篇：财富与套利 (Wealth & Arbitrage)](#第一篇财富与套利-wealth--arbitrage)
- [第二篇：心智与成长 (Mindset & Growth)](#第二篇心智与成长-mindset--growth)
- [第三篇：生活与幸福 (Life & Happiness)](#第三篇生活与幸福-life--happiness)

<div style="page-break-after: always;"></div>

`;

console.log("📚 开始合并《星佳宝典》完整书稿...");

try {
    let fullContent = frontMatter;

    for (const part of bookParts) {
        const partPath = path.join(outputDir, part);
        if (fs.existsSync(partPath)) {
            console.log(`  -> 正在合并: ${part}`);
            const content = fs.readFileSync(partPath, 'utf8');
            // 确保每个章节后都有分页符
            fullContent += content + '\n\n<div style="page-break-after: always;"></div>\n\n';
        } else {
            console.warn(`  ⚠️ 警告: 未找到分块文件 ${part}`);
        }
    }

    fs.writeFileSync(outputFile, fullContent, 'utf8');
    const finalSize = fs.statSync(outputFile).size;
    console.log(`\n✅ 合并完成！`);
    console.log(`   输出文件: ${outputFile}`);
    console.log(`   文件大小: ${(finalSize / 1024).toFixed(1)} KB`);
} catch (e) {
    console.error("合并过程出错：", e);
}

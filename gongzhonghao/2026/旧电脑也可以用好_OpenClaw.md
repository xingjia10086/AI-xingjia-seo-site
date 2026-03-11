![cover_image](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1G2gyics5IRxuibA2jKnsfJlJcdiciaUQCyeSBSdaOO5D6JBfsxjBM8KLVlg/0?wx_fmt=jpeg)

旧电脑也可以用好 OpenClaw
=================

原创 星佳 星佳 [星佳是个小人物](javascript:void\(0\);)

在小说阅读器中沉浸阅读

在文章《[动手给自己做一个最懂你的心理咨询师](https://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649831406&idx=1&sn=c3745463d91fcbd2dd53bd6d1918b514&scene=21&poc_token=HE5Ag2mjiapjFXZUJFa88mB3USffTQohqCUcdPXd#wechat_redirect)》里写过这么几个点：

1\. 初衷：想把公众号多年积累的上百万字内容投喂给AI，训练出一个真正懂我的“心理医生”。   

2\. 现实困境：现实中很难找到一个愿意听你几百万字还给出靠谱反馈的人。   

3\. 技术路径：曾尝试用ChatGPT、命令行工具、向量化等方式，让AI学习我的文字记录，实现个性化交互。   

4\. 目标：打造一个能长期陪伴、理解我经历与思想的AI助手，比传统心理医生更懂自己。

试过了很多方式，但总还有很大的提升空间，于是这两天折腾了下 OpenClaw，肉测后有这么几个发现：

1.完全不需要买新的Macmini，我分别装在了旧的macbook和windows电脑上

2.大模型选择Kimi目前就足够，聊天软件不建议小白折腾飞书等插件，和朋友们沟通完大家一致推荐用 Telgeram Bot最容易

3.Token没有消耗的那么可怕，但选择海外大模型如果通过API的方式接入，那得注意信用卡账单

4.如果不会安装，借助IDE的AI指令就好，缺Node GIT去装就好，命令行也没那么可怕。

先说几个自己的实际应用。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1GrRcUnKoH2Z7rtiaD4ia7ThPMKiaoTyAoeLSiaBdZ3bBgGjoiaYN9nO0zDng/640?wx_fmt=jpeg)

我在电脑里把最近几年写的的上千篇文章的.MD格式的文件一个指令就让我的助理慢慢去读，目的就是起初的设想，读了自己写了百万字内容的助理才能更有心灵感应，而且站在大模型的智慧层级可以主动的去提醒自己的一些想法和行动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1GAdauicfnEIab72DS5JWTEcU6AibUzzAR2uKhyJWZSNppBWP78a6WKECw/640?wx_fmt=png&from=appmsg)

在Web端后台里Ta告诉一直在读文章，并且时不时会主动给我发消息提问。

第二个案例就是让他用语音回复我适合的亲子游戏，起初Ta自己用TTS只能合成英语，怼了她两次后，已经可以流利的在电报机器人的私聊里回复我中文了，并且支持自定义声音。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1Ge2wFJN9jeAGKqR6ahuiaEEatu2OB5FSOuFFFyc2u6NNyhyI6wWjyO6A/640?wx_fmt=jpeg)

因为给了Ta足够高的权限，所以运行GateWay 网关服务的电脑没有什么重要文件，同时退出了icloud等等云端配置，随便折腾，倒也不用24小时运行，所以无法理解为何Macmini会脱销，旧电脑去装个Linux的系统甚至体验也不差。

Kimi的大模型配置起来也很简单，买个会员后直接输入API在命令行里即可，查看下Token的用量其实能接受，怎么也比找个真人实习生靠谱又省心的多啊！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1GjOCsyJy89x5buO2S9APTWutwWJ3RJuTKicgfMjrnLIia5IF2hgx66B2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1GdNzam03dCgB6aiagSYhRdqmSYoic7qMZCm9MWCKCjeeAr2j2esWdfFbQ/640?wx_fmt=png&from=appmsg)

国产大模型真的是越来越强了，26年注定是应用爆发的一年，随着动手接触AI编程的个人开发者越来越多，总会诞生量变产生质变的奇点，据说春节期间又有一些新的开源模型会发布，赶上人类科技进步的革命真是好运气啊！

别只看电影，试着成为里面的主角，动手给自己做一个专属的「Her」，这件事真不是科幻片了！

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tOFSAibJ5wqtzm3qOZPCUlxOjkdO1iaG1GGLeB1vKcCA502Uz1Mpia3HTCRGkjsRzJ3BK1wzrF3jbicyKgrH56XP1A/640?wx_fmt=jpeg)

对了，菲尼克斯同时也是 Joker 的演员，推荐他的小丑系列电影，社会是如何让一个原本善良的人成为罪恶之神的？

问了下公众号的私信，星佳对AI的研究主要包括以下几个方面：

1\. AI心灵按摩

通过AI与过去的自己对话，利用公众号、朋友圈等原创内容训练AI，实现自我反思与心灵对话。

使用阿里通义千问、Kimi等工具，发现AI能深刻理解个人经历，提供情感支持。

  

2\. AI工作流优化

探索AI工具提升工作效率，如沉浸式翻译、AI搜索引擎（Perplexity AI、秘塔AI等）。

强调多系统使用（Mac/Win、iOS/Android），并通过AI辅助阅读、文件管理等。

  

3\. AI在家庭与教育中的应用

利用AI分析家庭财务规划案例，如购房、信用卡使用、教育规划等。

探讨AI如何辅助家庭教育，如通过AI助手获取育儿经验。

  

4\. AI工具与技术探索

熟悉各类AI扩展与应用，如Chrome中的AI插件，用于英语学习与资料阅读。

关注AI发展趋势，如VR，AR设备与AI结合的未来可能性。

嗯，好好活着，拥抱科技！
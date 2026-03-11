---
title: 别手贱乱更新微信到客户端最新版
description: 自从把自己上千篇公众号都本地转成MD文件后，通过向量化给大模型训练，几百万字的原创内容基本上能有一个懂自己的智能体自个用用了，但其实数据还不够，于是不得不朝微信下手了。
date: 2024-05-28
category: 商业创业与自媒体
tags: ['创业干货', '自媒体变现', 'AI人工智能']
---

![cover_image](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKo8Q7LYicmu1RhdEgibXUyjzT55AED7wZMWnZloYoahqwGQWYC2pic9zEA/0?wx_fmt=jpeg)

别手贱乱更新微信到客户端最新版！


原创 


自从把自己上千篇公众号都本地转成MD文件后，通过向量化给大模型训练，几百万字的原创内容基本上能有一个懂自己的智能体自个用用了，但其实数据还不够，于是不得不朝微信下手了。

于是如何获得微信App的应用数据就需要解决下，刚开始走了弯路，但是也值得就。

先用iMazing软件直接导出了iPhone版本微信App的应用数据，33个G折腾了很久。

第一个坑，数据线连接win电脑，那个速度太慢了，装了iTunes默认备份在C盘，结果空间满了，如果折腾更换备份文件的保存路径，又折腾了半天。

所以，换了Mac去备份微信的应用数据，两个小时导出了33个G的微信数据。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKicXjVy7O65koA61ZaSyJCictzQQHD7qH7oI5os9FETkB7BBDaFZUBlqA/640?wx_fmt=png&from=appmsg)

然后根据某软件的教程，更名，压缩包，解压到 文件夹里的Container\\Documents文件夹，点击“读取数据”后，天塌了，只能看七条，而且很多功能都没有。

以上就是瞎折腾，因为claude code推荐的这个方法，至于为何？

先在win电脑备份了微信的聊天记录，但遇到一个大问题，连Claude Code 通过查询互联网的知识，也无法解密本地被封的聊天记录文件，数据就在那里放着，你就是无法一次性把某个群的聊天记录导出MD文件（理论上，唯一的路径要么微信App 要么微信客户端才可以读）。

尴尬的是，自己的聊天记录被微信的算法加密了，想脱离微信查看自己的聊天记录，那真得好好想办法了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKU6UFQdeIcia4Af2ZyXdESzQUG5oibPMrvFEs5EpsQ4fuzBYMvaTjhibpw/640?wx_fmt=png&from=appmsg)

解密失败的唯一原因： 

我手贱更新了微信客户端到最新版！

说个教训：

1.别只听一个AI的答案，多问几个，问清楚再行动，规划比盲目的干更重要啊！

2.最好一次就干一件事，不然真的手忙脚乱，人不是计算机，起码我自己很难并行做事情了，一次安心做一件事就行。

3.别让AI去互联网搜答案，程序类最好的知识库其实是 Github 才对啊！

于是，转变思路，终于在 Github 里找到一个大神维护的开源仓库

https://github.com/sjzar/chatlog/releases

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKQOMWX4OZBeth4DYibON6qp5K3Jk8fY7SZRhKjXZTNkaQVJIBFuI1bGA/640?wx_fmt=png&from=appmsg)

  

功能很简单，帮你通过电脑端微信客户端解密你的数据，然后调用MCP服务，帮你做这两件刚好是星佳需要的事：

1.可轻松查询聊天记录、联系人、群聊、最近会话等信息

2.支持 MCP Streamable HTTP 协议，可与 AI 助手无缝集成

经过本地部署，安装环境，测试一直无法解密，最后查了下大家的反馈，原来是如此简单的原因，客户端版本的微信自动更新了可能改了加密算法，于是开源程序失效了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKcR83wQtDC807I7V2h3ZZjDKq1hMSOsiayJehN2BfgpZy6pA9wYKYjiaQ/640?wx_fmt=png&from=appmsg)

于是，再开始找旧版本的微信安装程序，好在win系统在，多个不同版本的微信可以共存，于是终于测试成功，按照项目的教程，成功获取到了自己的微信聊天记录。

接下来就很容易了，对接 MCP 服务，通过提示词和AI助手开始和线上的自己聊天吧！

于是，你的微信聊天记录+你的公众号的内容+你自己其他经年累月积累的东西，都可以通过向量化后投喂给AI，然后和线上版本的自己可以互动了，或许这才是你专属的情感陪伴导师！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/tOFSAibJ5wqvPY4NGQiadKZiamPUIsmkLsKghuvZvmpqCkViaX5iafeP05TnwpicOYWM27oGoJV6ffFaDblbXHgaP4uQ/640?wx_fmt=png&from=appmsg)

通过 Cherry Studio里的 硅基流动的Qwen模型成功加载了 chatlog 的MCP服务，简单测试了下，连接成功，剩下的活明天再干吧。

今天最多的时间浪费在了一篇不靠谱的指引教学上，就跟人生游戏一样，不同的人会有不同的剧本和路径，解题思路只能借鉴，不能照抄，于是发现上午的解决方案不靠谱之后，果断换策略，居然半个小时就解决了问题，的确是思路解决出路啊！

换句话说，只要你有互联网，想真的解决一个问题，似乎通过现有的开源软件和AI的帮助，是真的可以满足自己的需求，比如星佳的需求很简单，把自己的公众号和微信的聊天记录投喂给AI大模型，然后让TA充分了解自己，这可比互联网厂家宣传的陪伴AI靠谱多。

你想想现实世界中，你一周只能见几次心理医生，而且更换心理医生的成本太高，毕竟每次你都得把你的往事和顾虑都得畅快的讲一遍给新的医生听，再靠谱的医生也无法做到24小时陪你，但自己开发的懂自己的AI陪伴师是可以的！

再往深了想，以后你把家里人的健康数据，看病记录和每年的体检报道等等都在本地保存后，之后接入一些医学类大模型，那么健康助理就真的可以根据你的身体状况评价你每天吃的东西，做的运动等等是否符合身体情况。

DeepThink 下，是不是那些不靠谱的律师慢慢也会被淘汰了呢？

好吧，今天累的头疼，下周继续完善自己的程序吧！

现在越用命令行工具，越喜欢这种直截了当的操作方式，怪不得真正的黑客都不用鼠标的！
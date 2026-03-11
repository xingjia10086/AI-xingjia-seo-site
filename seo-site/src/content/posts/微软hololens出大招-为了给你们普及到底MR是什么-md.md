---
title: 微软hololens出大招 为了给你们普及到底MR是什么
description: 微软hololens出大招，为了给你们普及到底MR是什么？
date: 2022-11-27
category: 其他与日常
tags: ['生活记录']
---

微软hololens出大招，为了给你们普及到底MR是什么？


原创 


今天惊闻微软hololens正式从官方微信公众号给中国开发者和消费者推送了第一篇推文，表达了他们入华的决心，接下来随着hololens逐渐在经过开发者版本的迭代后很快就会发布消费者版本，在此之前，星佳作为VR行业的『炮灰』有义务给大家普及下这款目前面世最牛逼的MR产品哦....

  

Spectator view 观察者视野原理：

  

> When wearing a mixed reality headset, we often forget that a person who does not have it on is unable to experience the wonders that we can. Spectator view allows others to see on a 2D screen what a HoloLens user sees in their world. Using spectator view involves these four components:
> 
>   
> 
> 1.  An app built specifically to enable spectator view, which is based on shared holographic experiences.
>     
> 2.  A user wearing HoloLens using the app.
>     
> 3.  A spectator view camera rig providing a third-person perspective video.
>     
> 4.  A desktop PC running the shared experience app and compositing the holograms into a spectator view video.
>     
> 
>   

  

相信大家看到这段英文还不明白到底星佳为何会在介绍Hololens的时候会提到这个叫做『观察者视野』的东西呢？照例，先上图：  

  

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGm0icZrsXS0u9XzrhCHECicEKqQAX356K0YnSwxdd7rcQpia0aKIibL9YvA/0?wx_fmt=png)

虚拟现实混合模式介绍协作的案例  

  

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGTWY2n8fzGhRZVSeRMm215KL2e4Vz4nUBZRnvkRWd1T8sMWtnicDsGLg/0?wx_fmt=png)

展示一款叫做in the OnSight app的demo

  

再来个视频给大家普及到底『Spectator view 』有多厉害？  

  

  

  

那到底这种全息经验的分享到底有什么意义呢？

  

人们可以在几种不同的方式分享经验,我们将一起学习,我们在这个空间中成长。我们的讨论范围,让我们使用以下类别定义人们如何将全息的经验分享。 

  

**Presentation 展示:**当相同的内容被多个用户。 例如:一个教授给几个学生上课使用相同的全息材料呈现给大家。然而教授可能有他/她自己的提示和指出,可能不是别人看到。 

  

**Collaboration 协作:**当人们共同努力实现一些常见的目标。 例如:教授给出了一个项目,了解执行心脏手术。学生配对并创建一个共享全息技能实验室经验使医学生对心脏模型和合作学习。 

  

**Guidance 指导:**当一个人帮助别人解决一个问题更一对一的互动风格。 例如:教授给予指导一个学生当他/她进行心脏手术技能实验室共享全息体验。

  

相信大家看到这里已经明白了为何星佳会花心思爬过高墙去看国外的技术资料，因为在微软文档里所说的『holographic experience（全息体验）』『Spectator view（观察者事业）』其实在一定程度上来讲其实就是『Mixed Reality video（虚拟现实混合视频）』的变形，不过前者是AR领域，而星佳一直说的MR是VR领域，不过VR领域的MR实现起来的难度更大一点而已，具体关于MR的详细介绍请查看星佳之前呕心沥血写的指导书：

  

[虚拟现实混合MR视频制作指南](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812460&idx=1&sn=807c77df4e1ddf891fbbaa9f1fd32d89&scene=21#wechat_redirect)  

  

[干货|低成本的虚拟现实混合直播MR视频终于破茧而出了...](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812416&idx=1&sn=1d304943b0e35ce9b3fc55bc389248df&scene=21#wechat_redirect)  

  

之后，了解了如何实现VR领域的MR之后，星佳开始说干货，到底如何实现基于hololens的观察者视野呢？先来个微软官方的视频介绍....  

  

  

  

这里不得不吐槽HTCVive，至今都没有官方对于实现MR视频制作的系统官方文档和教程，只能由星佳之类的民间高手去反复靠经验摸索如何低成本基于HTCvive实现MR的视频拍摄，真难过...这也能看出来微软对于下一代科技产品的决心呀。

  

**如何实现Spectator view的基本原理：**

  

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGSRS6gcENMhAW1IzUVsXCShRaH4x5ZmlgTgzcSdubP4I2q4zT9rwfxg/0?wx_fmt=png)

原理图

  

![](http://mmbiz.qpic.cn/mmbiz_jpg/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afG017nDzcbdavOXl8vlD3eLRxd3k9G3SgtdIhd6O84ItgBISicjBT8fIg/0?wx_fmt=jpeg)

实拍施工图  

  

**这项技术有三个关键场景的应用:** 　　

照片捕捉 　　

> 使用这种技术,您可以获取高分辨率的图像的全息图。这些图像可以用来展示内容营销事件,发送给你的潜在客户,甚至向窗口提交您的应用程序商店。

  

现场演示 　　

> 通过使用一个高质量的视频摄像头,你可以用于大屏幕生产高质量图像。这也是适合流媒体实时演示屏幕上,可以给现场观众直观的演示业务。　　

  

视频捕捉 　　

> 视频是最好的故事的机制，可以给很多人分享一个全息应用体验。观众视图允许您选择相机,镜头和框架,最适合你想展示你的应用。

  

![](http://mmbiz.qpic.cn/mmbiz_gif/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGIpXJKR4NJGP5GXOlTAOhIfXzCdq9IU3ZUuQjbkBhh5YDpXwCdQVnoA/0?wx_fmt=gif)

  

除了需要hololens之外，还需要如下DIY的摄像机，貌似和星佳之前DIY第三只Vive手柄的摄像机很像哦：

  

![](http://mmbiz.qpic.cn/mmbiz_gif/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGjz2XQxJxSfa9whicFL4rF8iaHib6VT35a4IBR0o6WOhcFpAjk2icwRP9UA/0?wx_fmt=gif)

![](http://mmbiz.qpic.cn/mmbiz_jpg/tOFSAibJ5wquUzjBEg0wh7tbEg7QM8afGwpdAjd6jP77BmkA6k82UXzbnw8bpVOWVTxdecJ83MevVU8WrxUQINw/0?wx_fmt=jpeg)

  

之后通过采集卡，HDMI，官方SDK接入和PC端的App支持，即可开始Spectator view的创意工作啦。

  

写到这里，相信能看明白的朋友们会很激动，随着hololens的发布，相信HTCvive会在17年被更多人接受，不管是MR，VR还是AR，很荣幸能处于这个科技带来时代变革给年轻人的巨大机会，我们一起努力吧。

  

微软官方文档参考：

https://developer.microsoft.com/en-us/windows/holographic/spectator\_view

https://developer.microsoft.com/en-us/windows/holographic/shared\_holographic\_experiences  

  

星佳推荐扩展阅读文章：

[虚拟现实混合MR视频制作指南](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812460&idx=1&sn=807c77df4e1ddf891fbbaa9f1fd32d89&scene=21#wechat_redirect)

[给初学者看的虚拟现实入门指导小视频](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812632&idx=1&sn=84e03eda5dde6a8bcca027c047caae88&chksm=889661dfbfe1e8c980189cb7d3ec088263de4f48d303749ce43d9c5a54d2e0d7c32eeb1a7145&scene=21#wechat_redirect)  

[罗永浩背后还有个同样牛逼的罗子雄](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812563&idx=1&sn=cce1c4f8cdb8fc5ec8e2b0a283856548&chksm=88966114bfe1e80240576cf0dae3e7d8d375f406fe7eca5963b84b2cd7b8d1bc149286336778&scene=21#wechat_redirect)  

  

欢迎交流，订阅和下方免费『写留言』

  

微信：xingjia10086

微博：@星佳是个小人物
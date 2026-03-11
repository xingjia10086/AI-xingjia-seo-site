---
title: 如何低成本的打造HTC Vive虚拟演播室直播MR视频
description: 如何低成本的打造HTC Vive虚拟演播室直播MR视频？
date: 2022-09-26
category: 其他与日常
tags: ['生活记录']
---

如何低成本的打造HTC Vive虚拟演播室直播MR视频？


原创 


如果你关心虚拟现实行业，肯定知道大名鼎鼎的HTC Vive，而除了游戏领域的应用外，我们正在尝试通过『虚拟现实头显+手柄+Lighthouse基站定位装置』来创造出更有趣的行业应用，接下来星佳就结合国外大神和圈内从业者们一起折腾出的宝贵经验和大家分享下如何低成本的打造虚拟演播室，同时利用直播软件直接可以直播MR视频：

  

**什么是MR（Mixed Reality）视频？**

  

Mixed Reality视频就是VR影像+人的影像合成的视频。相比普通录制电脑屏幕游戏画面和游戏者录像实拍分屏显示的假VR视频,Mixed Reality视频更适合用来做游戏直播和制作虚拟现实应用宣传视频，比如著名的google tilt bursh绘画程序，而由此带来了很多新的可能，比如教育，多人互动，科普等等行业应用。

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLXG03S7NOTbTSoBX4YCukFpy0lYsstHicUdwWRiacZDicwXmgia4xeq5xqA/0?wx_fmt=jpeg)  

  

上面这个视频截图就是HTC Vive官方宣传片的一个Mixed Reality视频,画面来源于官方赠送的一款叫做"The Lab"的射箭体验游戏，而游戏者人的画面是由一台摄像机配合第三只实体Vive手柄实时捕捉的。

  

因为人的影像摆放的位置，透视关系和玩家在虚拟场景中的位置，映射坐标都一样,摄像机拍摄画面中手拿手柄的位置和游戏画面中虚拟手柄的位置是完全一样的,看起来就像体验者身临其境走进了一个虚拟世界,并用双手借助实体手柄直接和游戏虚拟环境互动。

  

了解了理论知识，接下来星佳要帮大家解决的问题，原理和方案到底是如何实现的？

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8ML45sVe0XbBNCmvNp19oYYLjgOqhG9QicW0ptCIFg2iafJkZ57Ilu7hasA/0?wx_fmt=png)  

**需要准备什么？**

**硬件部分：**

摄影棚：墙和地面铺上绿布，大概6m\*6m即可，同时为了实时抠像，需要布光，如果没有专业经验请专业的灯光师帮忙吧，星佳也是折腾了很久，因为预算有限没办法做到足够完美。

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLsgeQHv3bDhO0SopcJ78fRWfur1rpmZqic2tTAR6vZXMCkwj1hjTMJSQ/0?wx_fmt=jpeg)

幻想拥有的巨资打造的摄影棚

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8ML4ia7vPiaheeusqNuZwsSx8kz3B9LEbYKdXb2dp48tST12E74ac3hQpPA/0?wx_fmt=jpeg)

实际情况预算条件下搭建出的摄影棚

摄像机：  

两种方案：

1.  像星佳一样的穷人用网络摄像头就行，比如网吧的聊天摄像头，五百块左右的罗技就挺好，例如Logitech Webcam C930e
    
2.  而如果你是土豪朋友可以买得起专业的摄像机和视频采集卡，那么无非效果会更赞，当然成本就贵了。看下图：
    
      
    

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8ML1Z2peYH2bNgyJic5hfd3uK4BH8LkYb2tRPicdIicWZGicENUUjjibS1Ghfg/0?wx_fmt=jpeg)  

斯坦尼康稳定器和单反相机的土豪方案

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLdFphj5PetvnO9gyCxsy1uibj5hghrgPpZuKAicKx7PPXPZQctEpddViag/0?wx_fmt=jpeg)  
穷逼星佳的支架单反方案（Gopro支架很好用）

  

星佳托朋友借了台佳能70D，又买不起视频采集卡（由于主机插槽不够用，还得买外置巨贵的采集卡），所以情急之下，星佳把相机通过usb直接连接PC主机的USB3.0口，配合佳能官方的实时摄影调节套件直接可以在电脑端软件实时调节相机参数捕捉拍摄画面，真是小聪明啊，虽然可能烧了CMOS。

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLsLVI0bQFnbNwuO4kK3joB7EicGAz7KKhLGKERhQI8O22h1uYt5uE07w/0?wx_fmt=jpeg)  

高性能主机+第三只Vive手柄（USB延长线连接电脑）：第三只手柄的作用如上图，绑定在佳能相机上，手柄作为作为游戏里的虚拟摄像机和物理环境的真实摄像机同步位置和焦距视野等数据，即可拍到正确位置的体验者。

  

**软件部分：**

目前只有Unity3D制作的虚拟现实程序支持MR模式，我们期待Value能够早日携手UE4放出来Unreal Engine for SteamVR的程序，当然SteamVR的版本得至少是1.0.8或以上哦。

  

OBS或者其他视频合成软件，用于实时获取应用窗口和简单抠图。

  

**干货来了，实际拍摄教程：**

1.  找到Steam安装路径下的config目录，新建文件名：steamvr.vrsettings
    

代码段如下：

  

> {"camera" : {"enableCamera" : true, "enableCameraForCollisionBounds" : true, "enableCameraInDashboard" : true}, "collisionBounds" : {"CollisionBoundsColorGammaA" : 169, "CollisionBoundsColorGammaB" : 0, "CollisionBoundsColorGammaG" : 255, "CollisionBoundsColorGammaR" : 163, "CollisionBoundsGroundPerimeterOn" : false, "CollisionBoundsStyle" : 0}, "jsonid" : "vrsettings", "keyboard" : {"TutorialCompletions" : 1}, "notifications" : {"DoNotDisturb" : true}, "perfcheck" : {"heuristicActive" : true}, "steamvr" : {"allowReprojection" : true, "background" : "C:\\\\Program Files (x86)\\\\Steam\\\\steamapps\\\\common\\\\SteamVR\\\\resources\\\\backgrounds\\\\viveNight.png"}, "version" : "1"},{"steamvr" : { "activateMultipleDrivers" : true } }

  

2.解压压缩包里的后缀为driver\_null.dll的文件覆盖到指定文件夹，

目录C:\\Program Files (x86)\\ViveSetup\\SteamVR\\drivers\\null\\bin\\win32 ：

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLficIFk2ppATSia31aMLavL65EjUeOf6b4xrwSBqjdSRiasiaZKCg2sS14Q/0?wx_fmt=png)  

  

3.以上两步工作做完后，启动SteamVR软件，在成功识别两只手柄后，通过USB延长线连接第三只手柄和PC，成功出现如下的SteamVR画面即代表配置文件生效：

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLLLY4Gdrf76fr819TP58fTlK4BW1ialFCicc8Etv8jiauia3Zicf2ZcwdzAA/0?wx_fmt=png)  

  

4.生成externalcamera.cfg文件：

运行压缩包里的cameraAgn.exe文件，之后可以戴上头盔拿起两个手柄可以在虚拟世界里看到第三只绑在摄像机上的手柄，按照程序要求配置各项参数即可生成cfg文件，之后把cfg文件放在可执行游戏程序的同目录下即可生成传说中的四分屏。

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLDQv997O0fbibM55sQsjamzYDqU7475DhsNzaliakSKWVQZpFYZHbGGbQ/0?wx_fmt=jpeg)  
cameraAgn.exe运行后的四分屏界面

  

externalcamera.cfg文件内容：

> x=0
> 
> y=0
> 
> z=0
> 
> rx=0
> 
> ry=0
> 
> rz=0
> 
> fov=60
> 
> near=0.1
> 
> far=100

  

以上参数只是默认值，最终要用什么数和虚拟摄像机的参数及摄像机和第三只手柄的摆放有关，需要在cameraAgn程序里进行仔细的调节，同时注意在运行房间教程的时候头盔和电脑画面正面和反面的不同结果哦。

  

5.星佳测试成功的切西瓜游戏的MR视频截图：

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLcbslBazRYbb9f7IP3tQ9V2q5j9sVcO2hrCF3dEp4HcdYK9zEbeGTJg/0?wx_fmt=png)  

出现四分屏画面后，基本就成功了一大半，目前此方式还只支持unity开发的程序，所以不能保证所有游戏应用都可以通过此办法来实现四分屏，视频演示地址：http://dwz.cn/xingjia55220  （点击阅读原文也可以，或者微博搜索@星佳是个小人物）

  

备注：

通过四分屏最终实现输出的影像由三个影像合成：

摄像机捕捉人的影像，覆盖在背景上（合成视频的背景，虚拟摄像机控制的画面），合成视频的前景覆盖在背景上即可。

  

6.成功之后在OBS中添加视频源（直播利用OSB设置推流地址即可成功）：

①前景：  

a.视频来源选择裁剪游戏窗口，区域和四分屏的左上角画面重合。

b.设置黑色为色键，扣除前景画面（注意看透视关系，游戏画面前景成功的遮罩住了人）

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLFe02VM7Ps9PiaQBWQ6v0TKcp0Nibjm3BlRic6KFic6mhWaVnHTE2D4K6IQ/0?wx_fmt=jpeg)  
获取正确的前景画面后的遮罩关系图

  

②摄像机捕捉：

a.视频来源选择摄像机画面输入或者视频采集卡

b.设置绿色为色键（和绿幕颜色一样），扣出人像

  

③背景：

视频来源选择裁剪游戏窗口，裁剪区域为虚拟摄像机第三只手柄的控制画面

  

实践成果：

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLkyJSD00BoGHC7QSWPibxXLudCibRhnRdUMZWI2CsYLOhU3mo9ItgvUdg/0?wx_fmt=gif)  
测试成功的tilt brush画画应用

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLvAqySMVBn3ztkv3OyYTick0v6o7Aa5uLSqD4IwRR2gC2BicHPjwQEPmw/0?wx_fmt=gif)  
测试成功的切西瓜应用

  

**多说几句：**

星佳已经和HTC官方沟通过，他们也在尝试把Lighthouse基站定位装置的能力第一时间开放给开发者，查看API文档可以获悉SteamVR最多可以获取八只实体手柄在Lighthouse范围内的位置，由此带来了更大的想象空间给开发者，尤其是传统行业的影视，CG，广告片，游戏直播等，而配合全身动作捕捉设备到底可以革新哪些行业，各位可以大开脑洞哦。

  

除此之外，在实际探索过程中还有一些细节问题还需要解决，比如单反的焦距和算法里的焦距可能存在差距，导致透视关系和比例显示有时会存在小问题，而高品质的视频输出还需要4K屏幕，为了屏幕可以放得下多个1080P窗口等等问题还需要和各位行内人探讨。

  

到了这里，初级版的低成本教程就结束了，希望借助可能是国内第一个揭秘MR视频拍摄的教程，星佳可以连接到更多的开发者，和那些助推虚拟现实行业普及的从业者们，当然如果你在MR视频的研究中也有宝贵的经验，欢迎联系星佳哦。

  

最后放上来国外的同行们一些工作成果，希望国内的行内人士多多探索交流。

  

![](http://mmbiz.qpic.cn/mmbiz/tOFSAibJ5wqucAc71ACb5d70LjaAFV8MLdJMHiaakiayiaRrLRt79YebOoZongRDh68dNIgp5lef9moEiczTOqK3QIw/0?wx_fmt=jpeg)  

  

我们正在考虑建设一个高标准的虚拟现实实验室，包括演播室，硬抠设备，工作站，VR，AR内容研发，MR视频制作，硬件设备体验等，所以如果你的公司有这方面的案例和技术研发团队，硬件供应商和设备整体解决方案提供商，欢迎联系星佳哦，邮箱：13709570071@qq.com

  

微信：xingjia10086

微博：@星佳是个小人物

  

文中部分图片来源于网络，如转载请获取星佳允许，谢谢。

  

如有问题，请关注公众号或者直接文章下方『写留言』哦..

[阅读原文](javascript:;)
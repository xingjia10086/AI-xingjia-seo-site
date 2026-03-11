如何使用HTC Vive Tracker追踪器制作混合现实视频？
================================

原创 星佳 星佳 [星佳是个小人物](javascript:void\(0\);)

在小说阅读器中沉浸阅读

作为国内最早研究虚拟现实混合视频的一批人，星佳很期待的Vive Tracker控制器终于发布了，这款799元的Vive Tracker追踪器，有了他，我们可以方便的制作MR视频，就像这样....

  

![](http://mmbiz.qpic.cn/mmbiz_gif/tOFSAibJ5wqtkgKRhhKgXefCGgLKDC1PXamicjYMfaglwtlgD5UdAIXS3rRODiaCXKqPqGcfzMGgJxvTjIOI3TQAg/0.gif?tp=webp&wxfrom=5&wx_lazy=1)

  

但是大多数朋友在拿到Vive Tracker之后发现并不像之前星佳的教程那样实现四分屏，而这篇文章给大家教教应该如何通过799元的Vive Tracker代替第三只手柄来实现MR？

  

在学习这篇教程之前，请务必查阅星佳之前写的教程，不然你无法理解MR拍摄的基础原理和实现步骤，当然去看看之前写的文章你也会受很多启发的，传送门（点击蓝色字体的文章题目即可跳转）：

  

[如何制作虚拟现实混合MR视频，看这一篇文章就够了！！！](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812811&idx=1&sn=5b3de104675316a5a6c97421fb5752d3&chksm=8896600cbfe1e91a942494fca6c48e0a37f9e9b351f6e4d56238a861ac5941fcae850b9935b6&scene=21#wechat_redirect)  

  

[虚拟现实混合MR视频制作指南](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812460&idx=1&sn=807c77df4e1ddf891fbbaa9f1fd32d89&scene=21#wechat_redirect)  

  

**接下来回归正题，已经拿到Vive Tracker的朋友很疑惑的是，为何.CFG文件按照之前星佳的教程放入游戏应用根目录后不能像之前第三只手柄一样成功出现四分屏？**

  

至于为何，因为星佳之前的文章是基于USB延长线的第三支手柄，而这次换成Vive Tracker控制器不能出现四分屏的原因不过是**SteaｍＶＲ驱动并不认为ViveTracker是第三只控制器也就没办法成为MR相机**，所以你不能直接将控制器像第三只手柄那样用于混合现实视频制作了。

  

接下来星佳告诉你正确的步骤：

  

### **安装跟踪器**

将跟踪器与三脚架安装牢固连接到您将要使用的任何摄像机。记住，校准后如果发生了位置改变，请重新校准哦，另外关于如何高效率的配置CFG文件星佳会在下文说明哦，我们继续看操作，这里附上一个绑定的示意图（保持水平即可）：

  

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wqtkgKRhhKgXefCGgLKDC1PXf3hYPHMx93DiaSqaPhNksEPeAHhOlZQVJlqTf6ptpT7AhXUNVeibQcTA/0?wx_fmt=png)

  

### 接下来，您需要使用固件程序来刷新跟踪器。

  

1.  下载Vive Tracker角色更换器。
    
2.  从电脑上拔下Vive。
    
3.  通过USB电缆插入跟踪器。
    
4.  运行角色更换器工具并按照提示进行操作。
    
5.  工具将报告跟踪器当前正在报告的内容，并为您提供切换其角色报告的选项。
    
6.  完成后，拔掉跟踪器并重新启动SteamVR，重新连接即可。
    

###   

注意：此工具用于更改跟踪器在SteamVR中作为控制器读取的角色。这仅适用于尚未正确识别设备的应用程序，例如基于Unity引擎制作的混合现实视频。

  

当跟踪器的驱动报告显示为控制器时，如果系统不要求进行更新（如果有），则不要更新固件，直到它再次报告为跟踪器为止。

  

此处星佳把叫做『Vive Tracker角色更换器』的工具会放在文章之后进行下载，目前版本为0.8，星佳在『小密圈』会持续更新固件下载和使用说明，当然你不乐意付费去花时间找的话也是可以的，不过小密圈给众多研究MR和虚拟现实朋友们提供了一个更优质的圈子而已。

  

### **设置跟踪器**

1.  将随附的加密狗，接收端USB连接到计算机。
    
2.  按住电源按钮打开跟踪器。
    
3.  验证它可以由SteamVR检测到即可。
    

###   

### **创建一个新的CFG文件。**

1.  下载MixedRealityConfigurator工具，或者按照之前星佳文件给大家教的办法慢慢配置好.cfg文件也可以哦。
    
2.  选择你的MR摄像机
    
3.  打开一个Vive控制器，并使用USB电缆插入跟踪器。
    
4.  通过佩戴头盔并确定Vive控制器被正确识别为虚拟摄像机即可。
    
5.  按照配置器中的提示创建一个正确的CFG文件（确保在不同的水平和垂直平面上的几个视觉标记上进行校准）。
    

###   

### 最后一步。

  

*   将CFG放在游戏的基本目录中（现在只适用于Unity引擎开发的游戏应用，具体名单请查阅星佳之前发的教程）。
    
*   其余的过程可以在星佳公众号和微博的文章中都能找到，比如必备设备，OBS抠图使用及减少延迟的办法等....
    

  

  

![](http://mmbiz.qpic.cn/mmbiz_jpg/tOFSAibJ5wqtkgKRhhKgXefCGgLKDC1PXmNCIWls69UgHAwanY1PibJGW5WXPzAfVPqicBo5bzAhYn2GCjLMn9YYQ/0?wx_fmt=jpeg)

  

**应该如何在不依靠经验的前提下快速的搞定.cfg配置文件里的rx ry rz和x y z的参数呢？**

  

星佳很负责的告诉各位，借助传统电影特效里的标记点的方式，完全可以解决在制作MR视频时候这个最大的难点，以后会抽空在合适的时机公开这个办法，所以早点扫码加入下方的『小密圈』吧，付费是最好的门槛。

  

**那么MR的未来和方向又在哪里呢？星佳有什么研究打算？**

  

之后我们的研究方向会放在Windows Mixed Reality，星佳也早就写了关于hololens在MR方面的实战教程：

  

[微软hololens出大招，为了给你们普及到底MR是什么？](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812661&idx=1&sn=e8bc323851cfd78db88c9b1bf2943528&chksm=889661f2bfe1e8e4cce0ea2a916c00eff47581468831c3f26c55e27ca0b261a720002bc803ab&scene=21#wechat_redirect)  

  

但是介于微软的hololens目前只是对于To B的商业版有大用处，而且高昂的折腾成本，星佳这种穷研发就不折腾如此先进的科技了，反正也没办法让市场买单，比如再等等等时机成熟再研究吧。

  

就在迷惑之时，发现牛逼的谷歌做出了一个更酷的东西，在MR视频里移除了头盔可以实现体验者实时表情的技术，具体看下面的文章：

  

[DayDream Labs发布新技术为虚拟现实混合视频除去VR头盔](http://mp.weixin.qq.com/s?__biz=MzA5ODQwMDgwOA==&mid=2649812740&idx=1&sn=5ac39bf50c01182f3b20d65056834898&chksm=88966043bfe1e9552e069d7e9135c6f639200723577d9b9c053c633e5e9d6ef8a8fbdfb0cc54&scene=21#wechat_redirect)  

  

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wqt5EjUicNQibh8VOIOWGYwA1pZDbPG5YGoeYlpbp3p0fictMwXAzmI3G8hZpnd3KGwOiaKQ1wicC8wj7pQ/0?wx_fmt=png)

  

这才是MR的终究未来呀，配合马上发布的Vive tracker，Tpcast的无线HTC Vive，和畅听头盔及其他基于Vive控制器的新奇应用，相信我们会看到更多有趣好玩的虚拟现实混合视频，同时会革新传统电影特效拍摄的方式，我们拭目以待哈。

![](http://mmbiz.qpic.cn/mmbiz_png/tOFSAibJ5wqtSIib7icQb3Gd2ibpicqFZMvCQgczbvoS4GKfjHY17477vDJb6hfsTiaADmlGSwibKsXRGBL9uwgp5kXaw/640?wx_fmt=png)

  

  

**还有文章里的附件去哪里下载呢？**

**长按二维码识别后付费进入『小密圈』，之后第一时间分享关于MR的第一手消息，也希望通过小密圈可以笼络国内一群致力于最黑科技的VR从业人员们，毕竟有些东西免费就没意思了。**

**当然，你也可以通过强大的google自己去搜索得到文中提到的工具哦....**

![](http://mmbiz.qpic.cn/mmbiz_jpg/tOFSAibJ5wqtkgKRhhKgXefCGgLKDC1PXAtj6GMrR1oQIiauicd1gDgIZmJwlibZ7LRoTMKdy068c0q8gYt70JxNpA/0?wx_fmt=jpeg)

  

微博：@星佳是个小人物

微信：xingjia10086
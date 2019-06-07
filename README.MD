## 应用名称：CC 速成班
说明：CC 是 Crash Course 的缩写。Crash Course 是一个知名的教育类 Youtube 频道。

介绍：这是一个手机 App, 上面有中文字幕的 Crash Course 视频。  
内容由字幕组成员维护。点击内容会跳转到 Bilibili。推荐同时安装 Bilibili 的移动端 App 搭配使用。     

这个 Github 库是 App 的代码，开源供参考。   

### 下载地址
* Android：https://www.coolapk.com/apk/147390
* iOS：无

### 应用截图1
<img src="/unrelated-stuff/ss.png" width="36%">

### 应用截图2
<img src="/unrelated-stuff/tab1.jpg" width="30%"><img src="/unrelated-stuff/tab2.jpg" width="30%"><img src="/unrelated-stuff/side.jpg" width="30%">      

### 视频演示
https://www.bilibili.com/video/av13236166/

### 更多说明
在 readme-part2.md

### 日志
#### 2019-6-7 
App 不可用（打开无法加载数据）问题原因是 API 域名。请耐心等待酷安上发新版，安装更新后可解决问题
解决：
1. React native 版本升级，0.44 更新到 0.59
2. Android Studio 3.4.1 内根据报错，清理了一些配置，能成功 Sync
3. react navigation 从 1.0.0-beta11 更新到 3.0, 3.0 have break changes. 代码要做变更
4. <Image> 里面不能包含元素, 换成 <ImageBackground>
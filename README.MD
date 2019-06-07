## 应用名称：CC 速成班
CC 是 Crash Course 的缩写。是 Youtube 上的一个教育类频道。

### 介绍
这是个安卓 App    
App 打开是有中文字幕的 Crash Course 视频 (字幕组自己维护 App 内容)     
点击会跳转到B站, 推荐同时安装B站的 App 搭配使用。             

### 下载地址
* Android: [酷安应用市场](https://www.coolapk.com/apk/147390)
* iOS: [无法过审](https://github.com/1c7/CrashCourse-iOS-App)

### 应用截图1
<img src="/unrelated-stuff/ss.png" width="36%">

### 应用截图2
<img src="/unrelated-stuff/tab1.jpg" width="30%"><img src="/unrelated-stuff/tab2.jpg" width="30%">


### 视频演示
https://www.bilibili.com/video/av13236166/

### 更多说明
在 readme-part2.md

## 更新日志
### 2019-6-7 
更新原因: App 不可用, 打开无法加载数据    
问题原因: API 域名。crashcourse.myherego.com 因为我离职所以无法使用了，现在用了 api.crashcourse.club
解决：
1. React Native 版本升: 0.44 到 0.59
2. Android Studio 3.4.1 根据报错，清理了一些配置，能成功 Sync
3. react navigation 从 1.0.0-beta11 更新到 3.0, 有 break changes. 大改了 `index.android.js` 的代码 
4. `<Image>` 里面不能包含 children, 换成 `<ImageBackground>` 就可以了

额外补充:    
原本今天 2019-6-7 打算继续找工作, 但是突发了这个事情(App 打不开).   
这个总得修, 也不能不修或者推给别人修,    
开始时间: 下午1点    
预计结束时间: 下午2点前结束      
实际结束时间: 晚上7点20分. 主要是装 Android Studio 和 SDK 花了不少时间,  
跑起来还碰到了各种问题, 光是为了跑起来就弄到了 4,5 点.      
打包提交到酷安就晚上7点20了，一天就砸在这玩意上了, 略有不满      

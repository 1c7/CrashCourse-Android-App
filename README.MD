## 『CC 速成班』
<img src="/unrelated-stuff/cc-logo.png" width="10%">  
这个 App 聚合了中文字幕 Crash Course 视频

### 下载地址
* Android：https://www.coolapk.com/apk/147390
* iOS：无

### 视频演示
https://www.bilibili.com/video/av13236166/


### App 截图
<img src="/unrelated-stuff/1.png" width="30%"><img src="/unrelated-stuff/2.png" width="30%"><img src="/unrelated-stuff/3.png" width="30%">      


---


### 技术
* App：React Native 0.46  
* 后端：Ruby on Rails 5
* 服务器：UCloud 广东区

### 统计数据
下载量：4900         
收到捐助总额：165 元（支付宝 43，微信 122）      

### 为什么开源？
给其他人提供一个参考。不是说代码写得多好，只是放出来给大家看看。   
如果有兴趣加入字幕组，或是有想法改进这个 App，欢迎聊聊。   

### Android 跑起来
记得先在 Android Studio 里打开一个模拟器先。  
```
react-native run-android
```

#### Android 打包
https://facebook.github.io/react-native/docs/signed-apk-android.html     
第一次打包和之后再打包不太一样（可以省略一些配置，因为第一次已经配置了），
现在打包是这样的：      

1. 弄一个安卓证书， 我的起名叫 cc.keystore
2. 把 cc.keystore 放到 android/app/
3. 跑 cd android && ./gradlew assembleRelease
4. 生成出来的文件在： android/app/build/outputs/apk/app-release.apk 

#### Android 写新的版本数
https://stackoverflow.com/questions/35924721/how-to-update-version-number-of-react-native-app

You should be changing your versionCode and versionName in android/app/build.gradle:
```
android {

    defaultConfig {

        versionCode 1
        versionName "1.0"

        {...}
    }

    {...}
}
```

#### 知乎专栏那边的介绍
[https://zhuanlan.zhihu.com/p/27804727](https://zhuanlan.zhihu.com/p/27804727)


### 如果有兴趣改进这个 App，欢迎提交 PR。
具体可以改进的点包括：      
1. 图片加载时提供一个占位符/动画/进度条。而不是一直白色一片。  
2. 顶部下拉刷新  
3. 滚动到底部加载更早的数据，这里可以改得更好一些。 
4. 捐款二维码可以放到侧边栏底部，点击就保存到相册里，而不是现在深深的藏在说明里，而且差不多要滚动到正中央才看得到。
5. 也许加一些动画效果？  
6. 优化性能，RN 还是有点卡卡的。
7. 尝试上线 iOS 版（不知道会不会因为版权问题被拒绝，但总得试试）
7. 其他暂时没想到的（欢迎说出你的改进想法）
           
参与方式：          
在这里开个 issue 表达你有兴趣，然后大概要做什么，改进哪些地方，等等。  
其实只要联系到我就行了，也可以给我发邮件 guokrfans#gmail.com   
也可以去 新浪微博@糖醋陈皮 找我



       
<img src="/unrelated-stuff/ss.png" width="45%">    

注：代码和上线版一样，无删减（当然去掉了 keystore，证书当然不开源）   
 
<img src="/unrelated-stuff/ku-an.png" width="50%">   
**只上线了安卓应用市场“酷安”** 
豌豆荚，小米，百度，比较烦就没上。       
腾讯应用宝拒了，所以也没上。      
iOS 因为不想交 699 一年的会员，也没上。  


### 最后
字幕组 Q 群：305631757    
[Crash Course 字幕组微博](http://weibo.com/5237129097/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1)



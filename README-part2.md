## 文档第二部分
Crash Course 字幕组 Q 群：305631757    

[Crash Course 字幕组微博](http://weibo.com/5237129097/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1)


### 技术
* App：React Native 0.46  
* 后端：Ruby on Rails 5
* 服务器：感谢 @coolralf 提供服务器

注：这里的代码和上架的 App 完全一致，无删减  
（唯一的例外是去掉了 keystore，签名证书不开源）  

### Android 跑起来
记得先在 Android Studio 里打开一个模拟器   
```
react-native run-android
```

#### Android 打包
https://facebook.github.io/react-native/docs/signed-apk-android.html     
第一次打包和之后再打包不太一样（可以省略一些配置，因为第一次已经配置了），
现在打包是这样的：      

1. 弄一个安卓证书， 我的叫 cc.keystore
2. 把 cc.keystore 放进 android/app/
3. 跑 cd android && ./gradlew assembleRelease
4. 生成的文件在： android/app/build/outputs/apk/app-release.apk

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

#### 文章介绍（知乎专栏）
[https://zhuanlan.zhihu.com/p/27804727](https://zhuanlan.zhihu.com/p/27804727)

### 可以改进的地方（欢迎提交 PR）   
1. 图片加载时提供一个占位符/动画/进度条。而不是一直白色  
2. 顶部下拉刷新  
4. 捐款二维码放到侧边栏底部，点击就保存到相册里，而不是现在深深的藏在说明里，差不多要滚动到正中央才看得到
5. 加一些动画效果？  
6. 优化性能，RN 还是有点卡卡的
7. 上线 iOS 版（不知道会不会因为版权问题被拒，总得试试）

参与方式：          
在这里开个 issue 表达你有兴趣，然后大概要做什么，改进哪些地方，等等    

### App 上架地点
**只上线了安卓应用市场”酷安“**
豌豆荚，小米，百度，比较烦就没上。       
腾讯应用宝拒了，所以也没上。      
 

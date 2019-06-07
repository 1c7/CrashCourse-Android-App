## 文档第二部分
Crash Course 字幕组 Q 群：305631757    

[字幕组微博](http://weibo.com/5237129097/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1)


### 技术
* App：React Native 0.59 (React Navigation 3.0)    
* 后端：Ruby on Rails 5
* 服务器：感谢 @coolralf 提供服务器

注：这里的代码和上架的 App 完全一致，无删减  
（唯一的例外是去掉了 keystore，打包要用的证书不开源）  

### 本地运行
先安装基本的 npm 模块(包括 React Native)
```
git clone https://github.com/1c7/CrashCourse-Android-App.git
cd CrashCourse-Android-App/
npm install
```
在 Android Studio 里打开一个手机模拟器，然后运行:   
```
react-native run-android
```

## 每次更新 App 版本时: 
#### 第一步：Android 写新的版本数
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

#### 第二步：Android 打包
https://facebook.github.io/react-native/docs/signed-apk-android.html     
第一次打包和之后再打包不一样（可以省略一些配置，因为第一次已经配置了）   
现在打包是这样的：      

1. 弄一个安卓证书， 我的叫 cc.keystore
2. 把 cc.keystore 文件放进 项目/android/app/ 文件夹
3. 运行 `cd android && ./gradlew assembleRelease`
4. 生成的文件在: `android/app/build/outputs/apk/app-release.apk`


#### 文章介绍（知乎专栏）
[https://zhuanlan.zhihu.com/p/27804727](https://zhuanlan.zhihu.com/p/27804727)

### 可以改进的地方（欢迎提交 PR）   
1. 图片加载时提供一个占位符/动画/进度条。而不是一直白色  
2. 顶部下拉刷新  
4. 捐款二维码放到侧边栏底部，点击就保存到相册里，而不是现在深深的藏在说明里，差不多要滚动到正中央才看得到
5. 加一些动画效果？  

参与方式：          
在这里开个 issue 表达你有兴趣，然后大概要做什么，改进哪些地方，等等    

### App 上架地点
**只上线了酷安**
豌豆荚，小米，百度，比较烦就没上。       
腾讯应用宝拒了，所以也没上。      


# 开源 React Native App(0.46)
## CC 速成班



### App 已上线 - 只上线了安卓应用市场：酷安
App 在酷安的地址：
豌豆荚，小米，百度，比较烦，就没上。   
腾讯应用宝拒了，所以也没上。
iOS 因为我不想交 699 一年的会员，也没上。

### App 长这样
图

#### 技术栈
* React Native 0.46  
* 后端 Ruby on Rails
顺带一说，我的开发和测试都是在 Mac 上做的。（2014 年 15寸 Macbook Pro）     
所以如果你在 Win 上跑这个项目，也许会有一些问题/错误。     


#### Android 跑起来
```
react-native run-android

```
### Android 打包
https://facebook.github.io/react-native/docs/signed-apk-android.html
第一次打包和之后再打包不太一样（可以省略一些配置，因为第一次已经配置了），
我这个已经配好了第一次的，所以现在打包是这样的：

1. 弄一个安卓证书， 我的起名叫 cc.keystore
2. 把 cc.keystore 放到 android/app/
3. 跑 cd android && ./gradlew assembleRelease
4. 生成出来的文件在： android/app/build/outputs/apk/app-release.apk 

### Android 写新的版本数
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
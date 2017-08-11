## CC 速成班 - Android :white_check_mark: iOS :x: - 开源 React Native 项目 (RN 版本 0.46)
[B 站视频演示 App](https://www.bilibili.com/video/av13236166/)

<img src="/unrelated-stuff/cc-logo.png" width="10%">       
<img src="/unrelated-stuff/ss.png" width="45%">    

注：代码和上线版一样，无删减（当然去掉了 keystore，证书当然不开源）   

["CC 速成班" 下载地址（酷安）](https://www.coolapk.com/apk/147390)    
<img src="/unrelated-stuff/ku-an.png" width="50%">   
**只上线了安卓应用市场“酷安”** 
豌豆荚，小米，百度，比较烦就没上。       
腾讯应用宝拒了，所以也没上。      
iOS 因为不想交 699 一年的会员，也没上。    


### App 是做什么的？
聚合了所有有字幕的 Crash Course 视频。       
建议安装 B 站的 App 然后作为打开方式。         
Crash Course 字幕组出品.         
字幕组 Q 群：305631757    
[Crash Course 字幕组微博](http://weibo.com/5237129097/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1)


### App 长这样（真机截图）
<img src="/unrelated-stuff/1.png" width="30%"><img src="/unrelated-stuff/2.png" width="30%"><img src="/unrelated-stuff/3.png" width="30%">


### 统计数据
下载量：~600（6 月 26 号上线酷安。到今天 8 月 11 号）          
收到捐助总额：165 元（支付宝收到 43 元，微信收到 122 元）            
（收到的金额会积累起来，等足够了就给译者买一些礼品，更具体的说明都写在 App 里了，这里就不赘述了）  

#### 技术栈
* React Native 0.46  
* 后端 Ruby on Rails (API)   
* 服务器在 UCloud 广东区   
* API 用了一个已备案域名的二级域名  

顺带一说，开发和测试（模拟器）都是在 Mac 上做的（2014 年 15寸 Macbook Pro）  
所以如果在 Win 上跑，也许会有一些问题/错误。        


### 为什么开源？
给其他人提供一个参考。不是说代码写得多好，只是放出来给大家看看。   
如果有兴趣加入字幕组，或是有想法改进这个 App，欢迎聊聊。   

<!--
### 怎么学？（看代码）
因为目前只有 Android 的，
所以 
1. 看一眼 index.android.js
2. 代码都在 src 里，放到一个文件夹就不会乱七八糟
3. src/Api.js 放的都是 API 地址，统一放一起好管理
4. 刚进去的时候，首页那个最新 tab， 是 src/HomeScreen.js
5. "系列" 是 src/CategoryScreen.js
6. "系列"点击任意一个是 src/CategoryListScreen.js
7. "说明"页面是 NoteScreen.js
8. TestScreen/VideoScreen 没用上，先放着。
9. 没了，就这么些代码，看一遍预计花费 < 30 分钟。有用的代码就 6 个文件。

* [index.android.js](./index.android.js)
* [src/HomeScreen](./src/HomeScreen.js) 
* [src/CategoryScreen](./src/CategoryScreen.js)
* [src/CategoryListScreen](./src/CategoryListScreen.js)
* [src/NoteScreen](./src/NoteScreen.js)
* [src/Api](./src/Api.js)
-->


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

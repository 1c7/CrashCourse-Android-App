# 更新日志

## 2019-6-7 
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

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { 
  StackNavigator, 
  TabNavigator, 
  DrawerNavigator,
} from 'react-navigation';

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
import CrashCourseDrawer from './src/CrashCourseDrawer'; // 侧边栏

const Tab = TabNavigator({
  Home: { screen: HomeScreen }, // 最新
  Category: { screen: CategoryScreen }, // 系列
});

// https://reactnavigation.org/docs/navigators/drawer
const MyApp = DrawerNavigator({
  Home: { screen: Tab },
  Category: { screen: CategoryScreen },
  CategoryList: { screen: CategoryListScreen },
},{
  drawerWidth: 240,
  contentComponent: props => <CrashCourseDrawer></CrashCourseDrawer>
});

// DrawerNavigator 里包一个 Tab
// 如果不这么写的话，点击系列的方块，那个列表不弹出来。
// 还有就是 Android 下特意设置了 header null (iOS 不是)
// 这样就不会又有 tab 又有 header

AppRegistry.registerComponent('haha', () => MyApp);

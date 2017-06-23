import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
import NoteScreen from './src/NoteScreen'; // 说明
import TestScreen from './src/TestScreen'; // 测试

const Tab = TabNavigator({
  Home: { screen: HomeScreen }, // 最新
  Category: { screen: CategoryScreen }, // 分类
  Note: { screen: NoteScreen }, // 说明
});

const SimpleApp = StackNavigator({
  Home: { screen: Tab },
  CategoryList: { screen: CategoryListScreen },
});
// Stack 里包一个 Tab，如果不这么写的话，点击系列的方块，那个列表不弹出来。
// 还有就是 Android 下特意设置了 header null (iOS 不是)
// 这样就不会又有 tab 又有 header

AppRegistry.registerComponent('haha', () => SimpleApp);

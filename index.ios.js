import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 类别
import CategoryListScreen from './src/CategoryListScreen'; // 类别
import NoteScreen from './src/NoteScreen'; // 说明
import TestScreen from './src/TestScreen'; // 测试
import VideoTestScreen from './src/VideoTestScreen'; // 也是测试
// import VideoScreen from './src/VideoScreen'; // 视频详细页，不需要了，因为现在是外部打开网页了。

// https://algori.tech/api/series

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Note: { screen: NoteScreen },
  Test: { screen: TestScreen },
  Category: { screen: CategoryScreen },
  CategoryList: { screen: CategoryListScreen },
});

AppRegistry.registerComponent('haha', () => SimpleApp);

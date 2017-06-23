import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import NoteScreen from './src/NoteScreen';
import TestScreen from './src/TestScreen';
import VideoScreen from './src/VideoScreen';
import HomeScreen from './src/HomeScreen';
import CategoryScreen from './src/CategoryScreen';
import VideoTestScreen from './src/VideoTestScreen';

// https://algori.tech/api/series

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }, // 首页
  Note: { screen: NoteScreen }, // 说明
  Category: { screen: CategoryScreen }, // 分类
  Test: { screen: TestScreen }, // 测试页面
  // VideoTestScreen: { screen: VideoTestScreen }, // 做视频测试的
  // Video: { screen: VideoScreen }, // 视频详细页，不需要了，因为现在是外部打开网页了。
});

AppRegistry.registerComponent('haha', () => SimpleApp);

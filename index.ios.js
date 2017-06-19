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

// https://algori.tech/api/series

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }, // 首页
  Chat: { screen: VideoScreen }, // 视频详细页
  Text: { screen: TestScreen }, // 测试页面
  Note: { screen: NoteScreen }, // 说明
  Category: { screen: CategoryScreen }, // 分类
});

AppRegistry.registerComponent('haha', () => SimpleApp);

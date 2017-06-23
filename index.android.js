import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
import NoteScreen from './src/NoteScreen'; // 说明
import TestScreen from './src/TestScreen'; // 测试

const SimpleApp = TabNavigator({
  Home: { screen: HomeScreen }, // 最新
  Category: { screen: CategoryScreen }, // 分类
  Note: { screen: NoteScreen }, // 说明
});

AppRegistry.registerComponent('haha', () => SimpleApp);

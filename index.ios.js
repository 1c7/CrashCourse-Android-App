import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
import NoteScreen from './src/NoteScreen'; // 说明
import TestScreen from './src/TestScreen'; // 测试

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  CategoryList: { screen: CategoryListScreen },
  Note: { screen: NoteScreen },
  Test: { screen: TestScreen },
});

AppRegistry.registerComponent('haha', () => SimpleApp);

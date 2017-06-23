import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import NoteScreen from './src/NoteScreen';
import TestScreen from './src/TestScreen';
import VideoScreen from './src/VideoScreen';
import HomeScreen from './src/HomeScreen';
import CategoryScreen from './src/CategoryScreen';

const SimpleApp = TabNavigator({
  Home: { screen: HomeScreen }, // 最新
  Category: { screen: CategoryScreen }, // 分类
  Note: { screen: NoteScreen }, // 说明
});

AppRegistry.registerComponent('haha', () => SimpleApp);

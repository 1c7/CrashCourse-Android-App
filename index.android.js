import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator,
} from "react-navigation";

import HomeScreen from './src/HomeScreen'; // 首页
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
// import CrashCourseDrawer from './src/CrashCourseDrawer'; // 侧边栏

const CategoryStack = createStackNavigator({
  Category: CategoryScreen,
  CategoryList: CategoryListScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Category: { screen: CategoryStack, navigationOptions: {
    title: '系列'
  }},
});

const AppNavigator = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppNavigator /* persistenceKey="if-you-want-it" */ />;
  }
}

AppRegistry.registerComponent('haha', () => App);
import React from 'react';
import {
  AppRegistry,
  Image,
  Icon,
} from 'react-native';
import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator,
} from "react-navigation";

import HomeScreen from './src/HomeScreen'; // 首页
import AboutScreen from './src/AboutScreen'; // 关于
import CategoryScreen from './src/CategoryScreen'; // 系列
import CategoryListScreen from './src/CategoryListScreen'; // 系列列表
// import CrashCourseDrawer from './src/CrashCourseDrawer'; // 侧边栏

const CategoryStack = createStackNavigator({
  Category: CategoryScreen,
  CategoryList: CategoryListScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home:{ screen: HomeScreen, navigationOptions: {
    title: '最新',
    // showIcon: false,
    tabBarIcon: ({ focused, tintcolor }) => (
      <Image source={require("./assets/newest.png")} style={{width: 20}} resizeMode="contain"/>
    )
  }},
  Category: { screen: CategoryStack, navigationOptions: {
    title: '系列',
    // showIcon: false,
    tabBarIcon: ({ focused, tintcolor }) => (
      <Image source={require("./assets/serie.png")} style={{width: 20}} resizeMode="contain"/>
    )
  }},
  About: { screen: AboutScreen, navigationOptions: {
    title: '关于',
    // showIcon: false,
    tabBarIcon: ({ focused, tintcolor }) => (
      <Image source={require("./assets/question.png")} style={{width: 20}} resizeMode="contain"/>
    )
  }},
});

const AppNavigator = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppNavigator /* persistenceKey="if-you-want-it" */ />;
  }
}

AppRegistry.registerComponent('haha', () => App);
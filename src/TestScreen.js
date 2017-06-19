// 只显示 test 文字
import React, { Component } from 'react';
import { Text } from 'react-native';
export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: '说明',
  };
  render() {
    return (
      <Text>12312312</Text>
    );
  }
}
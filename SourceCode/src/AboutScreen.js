// 说明页：只有一个 WebView
import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet } from 'react-native';
import Api_list from './Api';

export default class NoteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    if (Platform.OS === 'ios'){
      return {
        title: '说明',
      };
    } else {
      return {
        title: '说明',
        header: null,
      };
    }
  };

  render() {
    const url = Api_list.note_url;
    return (
      <View style={styles.container}>
        <Text>本 App 由 Crash Course 字幕组维护</Text>
        <Text>Q群 305631757</Text>
        <Text>邮件: guokrfans@gmail.com</Text>
        <Text>源代码开源地址:</Text>
        <Text>https://github.com/1c7/CrashCourse-Android-App</Text>
        <Text>想要夜间模式可以来写代码.</Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    // flex: 1,
    height: 160,
    // margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
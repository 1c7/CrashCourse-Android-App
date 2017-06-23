// 说明页：只有一个 WebView
import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class NoteScreen extends React.Component {
  static navigationOptions = {
    title: '说明',
  };
  render() {
    const { params } = this.props.navigation.state;
    const url = 'https://algori.tech/about_cc';
    //const url = 'http://localhost:7777/about_cc';
    return (
      <WebView
        source={{uri: url}}
        style={{flex: 1, backgroundColor: "#f99"}}
      />
    );
  }
}
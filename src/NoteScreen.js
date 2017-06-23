// 说明页：只有一个 WebView
import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class NoteScreen extends React.Component {
  static navigationOptions = {
    title: '说明',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: 'https://algori.tech/about_cc'}}
        style={{flex: 1, backgroundColor: "#f99"}}
      />
    );
  }
}
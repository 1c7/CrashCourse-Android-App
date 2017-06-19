// 说明：也是只有一个 WebView。能和另外的合并，但是先不管
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
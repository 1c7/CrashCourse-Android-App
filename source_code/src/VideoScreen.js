// 暂时没用到，只是一个 Webview 而已
// 先留着, 可能以后有用
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
export default class VideoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{flex: 1, backgroundColor: "#f99"}}
        allowsInlineMediaPlayback={true}
      />
    );
  }
}
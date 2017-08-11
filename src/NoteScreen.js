// 说明页：只有一个 WebView
import React, { Component } from 'react';
import { WebView, Platform, Linking} from 'react-native';
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
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{uri: url}}
        style={{flex: 1, backgroundColor: "#f99"}}
        onNavigationStateChange={(event) => {
          if (event.url != url) {
            console.log('stop loading!');
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }

}
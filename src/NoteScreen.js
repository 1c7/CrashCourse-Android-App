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
  
  // https://gist.github.com/tylerbuchea/9e50dcec14362349c392
  openExternalLink(req) {
    const url = Api_list.note_url;
    const isLocal = req.url.search(url) !== -1;
    if (isLocal) {
      return true;
    } else {
      Linking.openURL(req.url);
      return false;
    }
  }

  render() {
    const url = Api_list.note_url;
    return (
      <WebView
        source={{uri: url}}
        style={{flex: 1, backgroundColor: "#f99"}}
        onShouldStartLoadWithRequest={this.openExternalLink}
      />
    );
  }
}
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  FlatList,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

// 只显示文字, for test
class TextScreen extends React.Component {
  static navigationOptions = {
    title: 'Text Screen',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>{params.a}</Text>
    );
  }
}

// 只有一个 WebView
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.url}}
        style={{flex: 1, backgroundColor: "#f99"}}
      />
    );
  }
}

// 主页
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }
  static navigationOptions = {
    title: '最新',
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    //const url = `https://106.75.130.23/api/newest`;
    //const url = `https://facebook.github.io/react-native/movies.json`;
    const url = 'https://raw.githubusercontent.com/1c7/temp/master/newest.json';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("res is success get here");
        console.log(res);
        this.setState({
          data: res,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Networking fail');
      });
  };

  _renderItem(item) {
    //console.log(item);
    return (
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#888'}}>
        <TouchableOpacity 
          style={{flex: 1, flexDirection: 'row', backgroundColor: '#888'}}
          onPress={() => this.props.navigation.navigate("Chat",{a: item.title, url: item.video_link})} >
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            style={{width: 50, height: 50}} />
          <Text>{item.title}3</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const { navigate } = this.props.navigation;
    return ( 
      <View style={styles.container}>
        <FlatList
          data = { this.state.data }
          style = {{backgroundColor: '#000'}}
          navigation = { navigate }
          renderItem = { ({item}) => this._renderItem(item) }
        />
      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Text: { screen: TextScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch', // 全宽了
    backgroundColor: '#f96',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('haha', () => SimpleApp);

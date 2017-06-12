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
  ActivityIndicator
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

// 只显示文字
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
      isLoading: true
    }
  }
  static navigationOptions = {
    title: 'Welcome',
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    //const url = `https://106.75.130.23/api/newest`;
    //const url = `https://facebook.github.io/react-native/movies.json`;
    const url = 'https://raw.githubusercontent.com/1c7/temp/master/newest.json';
    //this.setState({ isLoading: false });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        console.log('asdasd');
        //this.setState({ error, isLoading: false });
      });
  };

  _renderItem(item) {
    return (
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Chat",{a: item.key, url: item.url})}
      >
        <Text>{item.key}</Text>
      </TouchableOpacity>
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
          data={[
            {key: 'Devin', url:'https://www.bilibili.com/video/av10808198/'},
            {key: 'Jackson', url:'https://www.bilibili.com/video/av10789963/'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          navigation = { navigate }
          renderItem = { ({item}) => this._renderItem(item) }
        />
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
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

export default class haha extends Component {
  _onPressButton() {
    console.log("You tapped the button!");
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={this._onPressButton}>
            <Text style={styles.item}>{item.key}</Text>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f96',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('haha', () => SimpleApp);

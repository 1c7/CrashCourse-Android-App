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
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


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

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <WebView
        source={{uri: 'https://www.bilibili.com/video/av11269785'}}
        style={{flex: 1, backgroundColor: "#f99"}}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  _renderItem(item) {
    return (
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Text",{a: item.key})}
      >
        <Text>{item.key}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
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

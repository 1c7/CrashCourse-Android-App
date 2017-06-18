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
import {
  StackNavigator,
} from 'react-navigation';

// 只显示 test 文字
class TextScreen extends React.Component {
  static navigationOptions = {
    title: '说明',
  };
  render() {
    return (
      <Text>12312312</Text>
    );
  }
}

// 说明：也是只有一个 WebView。能和另外的合并，但是先不管
class NoteScreen extends React.Component {
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

// 这个是详情页：只有一个 WebView
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
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
      data: [], // 列表的数据
      page: 1,
      refreshing: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      headerRight: <Button title="说明" onPress={() => {navigation.navigate("Note")} }/>,
      title: '最新'
    };
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  // 发请求
  makeRemoteRequest = () => {
    const {page} = this.state;
    const url = `https://algori.tech/api/newest?page=${page}`;
    this.setState({ refreshing: true });
    // 没有做空检测，先不管了，如果请求是 200 正常，但是完全是空的，这种没处理  

    setTimeout(() => {

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("res is success get here");
        console.log(res);
        this.setState({
          data: page === 1 ? res : [...this.state.data, ...res],
          isLoading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({isLoading: false, refreshing: true });
        console.log('Networking fail or result is empty'); 
      });

    }, 1000)  

  };

  _renderItem(item) {
    // 如果标题太长, 就切断变成 ...
    var length = 14;
    const trimmedString = item.title.length > length ? 
                    item.title.substring(0, length - 3) + "..." : 
                    item.title;
    return (
      <View style = {{flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderColor:'#aaa'}}>
        <TouchableOpacity 
          style = {{flex: 1, flexDirection: 'row'}}
          onPress = {() => this.props.navigation.navigate("Chat",{url: item.video_link, title: item.title})} >
          <Image source = {{uri: item.image}}
            style = {{flex: 1, height: 110}} // 差不多了
            resizeMode = "cover"
            />
          <View style={{flex:1}}>
            <View style={{flex:1, marginLeft: 10, marginRight: 10, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.serieText}>{item.serie_title}</Text>
              <Text style={styles.serieNumber}>第 {item.number} 集</Text>
            </View>
            <View style={{flex:1, marginLeft: 8, marginRight: 8, justifyContent: 'flex-start', alignSelf: 'center'}}>
              <Text style={styles.bodyText}>{item.title}</Text>
            </View>   
          </View>
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
          keyExtractor = {(item, index) => item.id}
          navigation = { navigate }
          renderItem = { ({item}) => this._renderItem(item) }
          onEndReached = {this.handleLoadMore}
          onEndReachedThreshold = {30}
          refreshing = {this.state.refreshing}
        />
      </View>
    )
  }
  // 载入下一页
  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.makeRemoteRequest();
    })
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }, // 首页
  Chat: { screen: ChatScreen }, // 视频详细页
  Text: { screen: TextScreen }, // 测试页面
  Note: { screen: NoteScreen }, // 说明
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch', // 全宽
  },
  serieText: {
    fontSize: 12,
  },
  serieNumber: {
    fontSize: 12,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  translatorText: {
    fontSize: 11,
    color: '#888',
  }
});

AppRegistry.registerComponent('haha', () => SimpleApp);

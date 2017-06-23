// 主页
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Linking
} from 'react-native';

export default class HomeScreen extends React.Component {
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
      headerLeft: <Button title="分类" onPress={() => {navigation.navigate('Category')} }/>,
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
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log("res is success get here");
        // console.log(res);
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
          onPress = {() => Linking.openURL(item.video_link)}>
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
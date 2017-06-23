import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';

import Grid from 'react-native-grid-component';

function type(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/,"$1").toLowerCase()
}

export default class CategoryScreen extends Component {
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
    return {
      title: '系列'
    };
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }
  // 发请求
  makeRemoteRequest = () => {
    // const {page} = this.state;
    const url = `https://algori.tech/api/series`;
    this.setState({ refreshing: true });
    // 没有做空检测，先不管了，如果请求是 200 正常，但是完全是空的，这种没处理  
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("r123123123123123");
        console.log(res);
        console.log(type(res));
        this.setState({
          data: res,
          isLoading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({isLoading: false, refreshing: true });
        console.log('Networking fail or result is empty'); 
      });
  };

  _renderItem = (data, i) => 
    <View style={styles.container} key={i}>
      <Image style={styles.image} source={{uri:data.image}}>
        <View style={styles.overlay}/>
         <View style={styles.overlayTextView}>
            <Text style={styles.text}>{data.title}</Text>
         </View>
      </Image>
    </View>

  render() {
    return (
      <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data = { this.state.data }
        itemsPerRow={2}
      />
    );
  }
}

const s = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    height: 160,
    margin: 1,
  },
  list: {
    flex: 1
  },
  image:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontWeight: "bold",
    fontSize: 16,
    color: 'white',
  },
  overlayTextView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3
  }
});
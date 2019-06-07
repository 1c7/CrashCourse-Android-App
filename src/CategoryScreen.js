// "系列" - 那些方块
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import Api_list from './Api';

// 这个 Grid 来自 https://github.com/phil-r/react-native-grid-component
import Grid from 'react-native-grid-component';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [], // 列表数据
      page: 1,
      refreshing: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    if (Platform.OS === 'ios'){
      return {
        title: '系列',
      };
    } else {
      return {
        title: '系列',
        header: null,
      };
    }
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }
  // 发请求
  makeRemoteRequest = () => {
    const url = Api_list.serie_url;
    this.setState({ refreshing: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          isLoading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({isLoading: false, refreshing: true });
        console.log('2Networking fail or result is empty'); 
      });
  };

  _renderItem = (data, i) => 
      <TouchableOpacity key={i} style={{flex: 1, flexDirection: 'row'}} 
          onPress = {() => this.props.navigation.navigate('CategoryList', {serie_id: data.id, serie_title:data.title})}>
        <View style={styles.container} >
        <ImageBackground style={styles.image} source={{uri:data.image}}>
          <View style={styles.overlay}/>
          <View style={styles.overlayTextView}>
              <Text style={styles.text}>{data.title}</Text>
              <Text style={styles.en_text}>{data.english_name}</Text>
          </View>
          <Text style={styles.subtitle_text}>{data.subtitle}</Text>
        </ImageBackground>
      </View>
      </TouchableOpacity>


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Grid
        style={styles.list}
        renderItem={this._renderItem}
        data={this.state.data}
        itemsPerRow={2}
      />
    );
  }
}

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
    fontSize: 18,
    color: 'white',
  },
  en_text:{
    fontSize: 14,
    color: 'white',
  },
  subtitle_text:{
    fontSize: 12,
    color: 'white',
    paddingBottom: 10,
  },
  overlayTextView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.7
  }
});
// 定制的侧边栏
import React, { Component } from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import { 
  StackNavigator, 
  TabNavigator, 
  DrawerNavigator,
  DrawerItems 
} from 'react-navigation';
import Api_list from './Api';

export default class CrashCourseDrawer extends React.Component {
  render(){
    const weibo = Api_list.weibo_url;
    const note = Api_list.note_url;
    return(
    <Image source={require('../img/cc-bg-dark.jpg')} style={styles.container}>
      <View style={styles.bigLogoContainer}>
        <Image source={require('../img/main.png')} style={styles.bigLogo}></Image>
      </View>
      
      <View style={{flex: 1, alignItems:'center', justifyContent:'center', width:240}}>
        <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold',textAlign:'center'}}>
          Don't forget to be awesome
        </Text>
      </View>
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress = {() => Linking.openURL(note)} style={styles.weiboItem}>
        <Image source={require('../img/s.png')} style={{width:24, resizeMode:'contain'}}></Image>
        <Text style={{color:'#fff', marginLeft: 10, marginTop: 2, fontSize: 14}}>说明</Text>
       </TouchableOpacity>
        <TouchableOpacity onPress = {() => Linking.openURL(weibo)} style={styles.weiboItem}>
          <Image source={require('../img/sina.png')} style={{width:24, resizeMode:'contain'}}></Image>
          <Text style={{color:'#fff', marginLeft: 12, marginTop: 2, fontSize: 14}}>Crash Course 字幕组</Text>
        </TouchableOpacity>
      </View>
    </Image>
    )
  }
};


// 侧边菜单 TODO Feature (有想法，不一定做)
// icon + 说明（就可以拿掉第三个 "说明" 的 tab 了）
// icon + 字幕组新浪微博
// icon + 官方 Patron
// 译者列表（排名不分先后）

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  },
  bigLogoContainer: {
    height: 140, 
    width: 240, 
    backgroundColor:'transparent', 
    flex: 2, 
    justifyContent:'center', 
    alignItems:'center',
    marginLeft: 10
  },
  bigLogo:{
    resizeMode: 'contain', 
    width: 180
  },
  bottomContainer: {
    width:240,
    flex: 2, 
    justifyContent:"flex-end", 
    alignItems:'center',
    backgroundColor: 'transparent', 
    flexDirection:'column'
  },
  weiboItem:{
    width:240, 
    height: 46, 
    flexDirection:'row', 
    backgroundColor:'#00000066', 
    justifyContent:'flex-start',
    alignItems:'center', 
    alignSelf:'flex-end',
    paddingLeft: 40
  }
});
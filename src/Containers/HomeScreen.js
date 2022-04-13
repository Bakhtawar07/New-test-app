import { isUser } from '@/Store/Login/UserLogin';
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {  useSelector } from 'react-redux';
import DummyCounter from './DummyCounter';

const HomeScreen = () => {
  const env = 'dev';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.margin}>
      <DummyCounter/>
      {/* <Text style={styles.text}>You are using</Text>
      <Text style={styles.envText}>{env}</Text>
      <Text style={styles.text}>environment</Text> */}
      {/* <LoginScreen/> */}
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent:'center'
  },
  text: {
    fontSize:32,
    textAlign:'center'
  },
  envText:{
    fontSize:40,
    textAlign:'center',
    fontWeight:'bold',
    marginVertical:16
  },
  margin:{
    marginTop:30
  }
})

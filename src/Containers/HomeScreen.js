import { isUser } from '@/Store/Login/UserLogin';
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import DummyCounter from './DummyCounter';
import LoginScreen from './LoginScreen';

const HomeScreen = () => {
  const env = 'dev';
  const dispatch = useDispatch()
  const value = useSelector(state => {
    return state?.userLoginStatus?.value
  }) 
  console.log("Homescreen", value);
  return (
    <View style={styles.mainContainer}>
      <Button title="Logout" onPress={()=>{dispatch(isUser.action(false))}}/>
      <View style={{marginTop:30}}>
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
  }
})

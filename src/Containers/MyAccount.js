import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { isUser } from '@/Store/Login/UserLogin'
import { useNavigation } from '@react-navigation/core'

const MyAccount = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function onSubmit() {
    dispatch(isUser.action(false))
    navigation.navigate('HomeScreen')
  }
  return (
    <View style={styles.wrapperStyle}>
      <Text style={styles.userTextStyle}>Hi Bakhtawar</Text>
      <Button title={'Logout'} onPress={onSubmit} />
    </View>
  )
}

export default MyAccount

const styles = StyleSheet.create({
  userTextStyle: {
    fontSize: 28,
    padding: 30,
  },
  wrapperStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

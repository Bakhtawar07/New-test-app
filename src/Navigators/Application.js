import React from 'react'
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import LoginScreen from '@/Containers/LoginScreen'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const isLogin = useSelector(state => {
    return state?.userLoginStatus?.value
  })

  const AppStack = () => (
    <>
      <Stack.Screen name="Startup" component={StartupContainer} />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </>
  )

  /* B2B App Stack */
  // const AuthStack = () => (
  //   <>
  //     {/* <Stack.Navigator> */}
  //       <Stack.Screen
  //         name="Login"
  //         component={LoginScreen}
  //         options={{
  //           animationEnabled: false,
  //         }}
  //       />
  //     {/* </Stack.Navigator> */}
  //   </>
  // )

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Stack.Navigator>
          {/* B2B App Stack
         {isLogin ? AppStack() : AuthStack()} */}
          {AppStack()}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator

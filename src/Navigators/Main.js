import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@/Containers'
import Counter from '@/Containers/Counter'
import MyAccount from '@/Containers/MyAccount'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { isUser } from '@/Store/Login/UserLogin'
import ApplicationForm from '@/Containers/ApplicationForm'

const Tab = createBottomTabNavigator()
const MainNavigator = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isLogin = useSelector(state => {
    return state?.userLoginStatus?.value
  })
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Application Form"
        component={ApplicationForm}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccount}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
        listeners={() => ({
          tabPress:  (e) => {
            console.log("E", e, isLogin);
            if (!isLogin) { 
              e.preventDefault();
              navigation.navigate("Login") 
              // dispatch(isUser.action(true))

          }
        
          }
          })}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator

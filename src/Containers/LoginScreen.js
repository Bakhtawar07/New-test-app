import { isUser } from '@/Store/Login/UserLogin'
import { useNavigation } from "@react-navigation/native"
import { Formik } from 'formik'
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

export default function LoginScreen() {
    const navigation = useNavigation()
   const dispatch = useDispatch()
   const value = useSelector(state => {
    return state?.userLoginStatus?.value
  }) 
   const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  function login(){
    dispatch(isUser.action(true))

  }

  return (
    <View style={{ paddingHorizontal: 20, flex:1, justifyContent:'center' }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
        validationSchema={loginValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputStyle}
              placeholder="Enter your email"
            />
            {console.log('Error', touched)}
            {errors.email && touched.email ? (
              <Text style={styles.errorStyle}>{errors.email}</Text>
            ) : null}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.inputStyle}
              placeholder="Enter password"
              secureTextEntry={true}

            />
            {errors.password && touched.password ? (
              <Text style={styles.errorStyle}>{errors.password}</Text>
            ) : null}

            <Button onPress={handleSubmit} title="Submit" color="#841584"  />
          </View>
        )}
      </Formik>
    </View>
    // <View>
    //   <Text>LoginScreen</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    // flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#dadae8',
    height: 40,
    //    marginBottom:10,
    marginTop: 10,
  },
  errorStyle: {
    color: 'red',
    marginTop: 4,
  },
 
})

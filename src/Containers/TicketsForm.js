import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const TicketsForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  )
}

export default TicketsForm

const styles = StyleSheet.create({})

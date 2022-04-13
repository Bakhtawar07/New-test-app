import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = props => {
  const { field, values, setFieldValue, errors } = props
  return (
    <View>
      <Text style={styles.labelStyle}>{values?.field_label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setFieldValue(field, { ...values, field_value: text })
        }}
        placeholder={values?.field_placeholder}
        value={values?.field_value}
      />
      {errors[field]?.field_value && (<Text style={styles.errorMessage}>{errors[field]?.field_value}</Text>)}
    </View>
  )
}

export default CustomInput
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  labelStyle: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  errorMessage:{
      color:'red',
      marginLeft:10
  }
})

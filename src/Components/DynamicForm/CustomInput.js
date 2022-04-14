import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = props => {
  const { fieldKey, values, setFieldValue, errors } = props
  const handleChange = text => {
    setFieldValue(fieldKey, { ...values, field_value: text })
  }
  return (
    <View>
      <Text style={styles.labelStyle}>{values?.field_label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(text)}
        placeholder={values?.field_placeholder}
        value={values?.field_value}
      />
      {errors[fieldKey]?.field_value && (
        <Text style={styles.errorMessage}>{errors[fieldKey]?.field_value}</Text>
      )}
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
  errorMessage: {
    color: 'red',
    marginLeft: 10,
  },
})

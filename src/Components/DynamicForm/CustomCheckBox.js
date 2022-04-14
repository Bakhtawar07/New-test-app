import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

const CustomCheckBox = props => {
  const { fieldKey, values, setFieldValue, errors } = props
  const handleChange = val => {
    setFieldValue(fieldKey, { ...values, field_value: val })
  }
  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={values?.fieldValue}
          onValueChange={handleChange(val)}
          style={styles.checkbox}
        />
        <View>
          <Text style={styles.label}>{values?.field_label}</Text>
        </View>
      </View>
      {errors[fieldKey]?.field_value && (
        <Text style={styles.errorMessage}>{errors[fieldKey]?.field_value}</Text>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  errorMessage: {
    color: 'red',
    marginLeft: 10,
  },
})

export default CustomCheckBox

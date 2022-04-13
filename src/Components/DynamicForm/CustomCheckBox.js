import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

const CustomCheckBox = props => {
  const { field, values, setFieldValue, errors } = props
  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={values?.fieldValue}
          onValueChange={val => {
            setFieldValue(field, { ...values, field_value: val })
          }}
          style={styles.checkbox}
        />
        <View>
          <Text style={styles.label}>{values?.field_label}</Text>
        </View>
      </View>
      {errors[field]?.field_value && (
        <Text style={styles.errorMessage}>{errors[field]?.field_value}</Text>
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

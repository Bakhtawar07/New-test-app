import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

const CustomSelect = props => {
  const { field, values, errors } = props
  console.log("SESLESCT", errors?.select?.field_value, values?.field_value);

  return (
    <>
      <View>
        <SelectDropdown
          data={values?.field_options.map(item => {
            return item?.option_label
          })}
          onSelect={(selectedItem, index) => {
            props?.setFieldValue(field, {
              ...values,
              field_value: selectedItem,
            })
          }}
          defaultValue={values?.field_value}

        />
      </View>
      {!!errors?.select?.field_value && (
        <Text style={styles.errorMessage}>{errors?.select?.field_value}</Text>
      )}
    </>
  )
}

export default CustomSelect

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 7,
  },
})

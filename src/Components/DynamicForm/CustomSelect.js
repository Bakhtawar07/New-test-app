import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

const CustomSelect = props => {
  const { fieldKey, values, errors } = props
  function data() {
    values?.field_options.map(item => {
      return item?.option_label
    })
  }
  return (
    <>
      <View>
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            props?.setFieldValue(fieldKey, {
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

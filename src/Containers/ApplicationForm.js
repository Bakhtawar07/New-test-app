import { StyleSheet, Text, Button, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { data } from '@/Components/dataJSON'
import Element from '@/Components/DynamicForm/Element'

const ApplicationForm = () => {
  const validateSchema = yup.object({
    email: yup
      .object()
      .shape({
        field_value: yup
          .string()
          .email('Email must be a valid email')
          .required('Email is required'),
      })
      .required(),
    name: yup
      .object()
      .shape({
        field_value: yup.string().required('Name is required'),
      })
      .required(),
    licenseCheck: yup
      .object()
      .shape({
        field_value: yup.boolean().oneOf([true], 'Please Check Box'),
      })
      .required(),
    licenseNumber: yup
      .object()
      .shape({
        field_value: yup.number().required('License Number is required'),
      })
      .required(),
      selection: yup
      .object()
      .shape({
        field_value: yup.string().required('Job Time is required'),
      }).test(
        function(field_value) {
          return console.log("val", field_value);
        }
      )
      .required(),
  })

  return (
    <View>
      <Text style={styles.heading}> Job Application Form</Text>
      <Formik
        initialValues={data}
        validationSchema={validateSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ values, setFieldValue, handleSubmit, errors }) => (
          <>
            <View>
              {Object.entries(values).map(([field, value]) => {
                return (
                  <Element
                    field={field}
                    value={value}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                )
              })}
            </View>
            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  )
}

export default ApplicationForm

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
  },
})

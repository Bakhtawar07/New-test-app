import React, { useEffect } from 'react'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomCheckBox from './CustomCheckBox'

const Element = props => {
  const { value, errors } = props
 

  switch (value?.field_type) {
    case 'text':
      return (
        <CustomInput
          fieldKey={props?.fieldKey}
          values={props?.value}
          setFieldValue={props?.setFieldValue}
          errors={errors}
         
        />
      )
    case 'select':
      return (
        <CustomSelect
        fieldKey={props?.fieldKey}
        values={props?.value}
        setFieldValue={props?.setFieldValue}
        errors={errors}

        />
      )
    case 'checkbox':
      return (
        <CustomCheckBox
        fieldKey={props?.fieldKey}
        values={props?.value}
        setFieldValue={props?.setFieldValue}
        errors={errors}

        />
      )

    default:
      return null
  }
}

export default Element

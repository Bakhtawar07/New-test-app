


export const data = {
  name: {
    field_id: 'english_name',
    field_label: 'Name',
    field_mandatory: 'yes',
    field_placeholder: 'Enter Name',
    field_type: 'text',
    field_value: '',
  },
  email:{
    field_id: 'email',
    field_label: 'Email',
    field_mandatory: 'yes',
    field_placeholder: 'Enter Email',
    field_type: 'text',
    field_value: '',
  },
  selection:{
    field_id: 'english_name',
    field_label: 'Name',
    field_mandatory: 'yes',
    field_value: 'Part-Time',
    field_options: [
      {
        option_label: 'Full-time',
      },
      {
        option_label: 'Part-time',
      },
    ],
    field_type: 'select',
  },
  licenseCheck:{
    field_id: 'driving_license',
    field_label: 'I confirm to have a license',
    field_mandatory: 'yes',
    field_placeholder: 'e.g 012 326 234',
    field_type: 'checkbox',
    field_value: 'false',
  },
  licenseNumber:{
    field_id: 'identity',
    field_label: 'Driving License Number',
    field_mandatory: 'yes',
    field_placeholder: 'e.g 012 326 234',
    field_type: 'text',
    field_value:''
  }
}
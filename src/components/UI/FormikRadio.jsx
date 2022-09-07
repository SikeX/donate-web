import React from 'react'
import { RadioGroup } from 'formik-mui'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Field } from 'formik'
import Radio from '@mui/material/Radio'

function FormikRadio({ className, name, options }) {
  return (
    <Field row component={RadioGroup} name={name} className={className}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          // disabled={props.isSubmitting}
          label={option.label}
        />
      ))}
    </Field>
  )
}

export default FormikRadio

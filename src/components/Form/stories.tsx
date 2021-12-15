import { useState } from 'react'

import { Story, Meta } from '@storybook/react'
import { CSSProperties } from 'styled-components'

import { Form, FormProps } from '.'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup'

export default {
  title: 'Form2',
  component: Form
} as Meta

type FormValues = {
  name: string
  number: number
}

export const Default: Story<FormProps<FormValues>> = () => {
  const [submittedValues, setSubmittedValues] = useState({})
  function onSubmit(values: FormValues) {
    console.log(values)
    setSubmittedValues(values)
  }

  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Enviar</button>
      </Form>
      {JSON.stringify(submittedValues, null, 2)}
    </div>
  )
}

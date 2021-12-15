import { Form } from 'components/Form'
import InputTest from 'components/InputTest'
import { useState } from 'react'

import * as yup from 'yup'

type FormValues = {
  name: string
  number: number
}

const requiredMessage = 'Campo obrigatório'
const schema = yup.object().shape({
  email: yup.string().required(requiredMessage)
})

const FormRegister = () => {
  const [submittedValues, setSubmittedValues] = useState({})
  function onSubmit(values: FormValues) {
    console.log(values)
    setSubmittedValues(values)
  }
  return (
    <Form onSubmit={onSubmit} schema={schema}>
      <InputTest type="text" name="email" />
      <button type="submit">Enviar</button>
    </Form>
  )
}

export default FormRegister

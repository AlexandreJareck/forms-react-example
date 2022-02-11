import * as yup from 'yup'

const requiredMessage = 'Campos Obrigatório!'

const schema = yup.object().shape({
  email: yup.string().required(requiredMessage)
})

export default schema

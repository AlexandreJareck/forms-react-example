import * as yup from 'yup'

const requiredMessage = 'Campos Obrigatório!'

const schema = yup.object().shape({
  email: yup.string().required(requiredMessage),
  name: yup.string().required(requiredMessage),
  isCheck: yup.string().required(requiredMessage),
  password: yup.string().required(requiredMessage),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default schema

import * as yup from 'yup'

const requiredMessage = 'Campos Obrigatório!'

const schema = yup.object().shape({
  password: yup.string().required(requiredMessage),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default schema

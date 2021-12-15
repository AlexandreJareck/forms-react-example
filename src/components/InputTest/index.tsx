import TextField, { TextFieldProps } from 'components/shared/TextField'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { Container } from './styles'

const InputTest = ({ name = '', ...rest }: TextFieldProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <Container>
      <TextField {...register(name)} {...rest} />
    </Container>
  )
}

export default InputTest

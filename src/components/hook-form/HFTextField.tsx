import TextField, { TextFieldProps } from 'components/shared/TextField'
import { useFormContext } from 'react-hook-form'

const HFTextField = ({ name = '', onBlur, ...rest }: TextFieldProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <TextField {...register(name)} error={errors[name]?.message} {...rest} />
  )
}

export default HFTextField

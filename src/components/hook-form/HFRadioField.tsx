import Radio, { RadioProps } from 'components/shared/Radio'
import { useFormContext } from 'react-hook-form'

const HFRadioField = ({ name = '', onBlur, ...rest }: RadioProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  // error={errors[name]?.message}
  return <Radio {...register(name)} {...rest} />
}

export default HFRadioField

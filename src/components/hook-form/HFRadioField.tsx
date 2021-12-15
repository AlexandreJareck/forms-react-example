import Radio, { RadioProps } from 'components/shared/Radio'
import { useFormContext } from 'react-hook-form'

const HFRadioField = ({ name = '', onBlur, ...rest }: RadioProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return <Radio {...register(name)} error={errors[name]?.message} {...rest} />
}

export default HFRadioField

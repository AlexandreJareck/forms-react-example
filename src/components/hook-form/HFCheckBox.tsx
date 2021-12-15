import { useFormContext } from 'react-hook-form'

import Checkbox, { CheckboxProps } from '../shared/Checkbox'

const HFCheckbox = ({ name = '', isChecked, ...rest }: CheckboxProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    // <Checkbox {...register(name)} error={errors[name]?.message} {...rest} />
    <Checkbox {...register(name)} isChecked={isChecked} {...rest} />
  )
}

export default HFCheckbox

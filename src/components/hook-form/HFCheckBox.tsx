import { useFormContext } from 'react-hook-form'

import Checkbox, { CheckboxProps } from '../shared/Checkbox'

const HFCheckbox = ({ name = '', isChecked, ...rest }: CheckboxProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <Checkbox
      {...register(name)}
      isChecked={isChecked}
      error={errors[name]?.message}
      {...rest}
    />
  )
}

export default HFCheckbox

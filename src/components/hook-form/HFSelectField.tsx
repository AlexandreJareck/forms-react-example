import OptionField from 'components/OptionField'
import SelectField, { SelectFieldProps } from 'components/shared/SelectField'
import { useFormContext } from 'react-hook-form'

const HFSelectField = ({ name = '', options, ...rest }: SelectFieldProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <SelectField {...register(name)} error={errors[name]?.message} {...rest}>
      {options &&
        options.map((item) => (
          <OptionField key={item.value} value={item.value}>
            {item.name}
          </OptionField>
        ))}
    </SelectField>
  )
}

export default HFSelectField

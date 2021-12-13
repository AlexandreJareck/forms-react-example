import { InputHTMLAttributes, useState } from 'react'
import { Container, Input, Label } from './styles'

export type CheckboxProps = {
  isChecked?: boolean
  onCheck: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number | undefined
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  isChecked = false,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)
  const onChange = () => {
    setChecked(!checked)
    !!onCheck && onCheck(!checked)
  }

  return (
    <Container>
      <Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Label>
      )}
    </Container>
  )
}

export default Checkbox

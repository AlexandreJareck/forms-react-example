import { useState, InputHTMLAttributes } from 'react'
import { Container, Icon, Input, InputWrapper, Label, Error } from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  error,
  initialValue = '',
  onInput,
  icon,
  name,
  iconPosition = 'left',
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <Container disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}

export default TextField

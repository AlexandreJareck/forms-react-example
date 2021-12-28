import {
  FocusEvent,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { Container, Icon, Input, InputWrapper, Label, Error } from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  type: 'text' | 'password' | 'email'
} & InputHTMLAttributes<HTMLInputElement>

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    label,
    error,
    initialValue = '',
    onInput,
    icon,
    name,
    iconPosition = 'left',
    disabled = false,
    type,
    onBlur,
    ...props
  },
  ref
) => {
  return (
    <Container disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          type={type}
          ref={ref}
          onBlur={onBlur}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...props}
          {...(label ? { id: name } : {})}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}

export default forwardRef(TextField)

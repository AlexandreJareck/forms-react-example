import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { Container, Input, Label } from './styles'
import { Error } from 'components/shared/Error'

export type CheckboxProps = {
  isChecked?: boolean
  onCheck?: () => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  error?: string | string[]
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  {
    label,
    isChecked = false,
    labelFor = '',
    labelColor = 'white',
    error,
    onCheck,
    ...props
  },
  ref
) => {
  return (
    <Container>
      <Input
        ref={ref}
        id={labelFor}
        type="checkbox"
        checked={isChecked}
        {...props}
      />
      {!!label && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Label>
      )}
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}

export default forwardRef(Checkbox)

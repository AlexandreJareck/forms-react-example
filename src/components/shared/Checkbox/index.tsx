import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { Container, Input, Label } from './styles'

export type CheckboxProps = {
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  { label, isChecked = false, labelFor = '', labelColor = 'white', ...props },
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
    </Container>
  )
}

export default forwardRef(Checkbox)

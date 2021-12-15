import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { Error } from '../Error'
import { Container, Input, Label } from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioValue
  error?: string | string[]
} & InputHTMLAttributes<HTMLInputElement>

const Radio: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  { label, labelColor = 'white', labelFor, value, error, ...props },
  ref
) => {
  return (
    <Container>
      <Input ref={ref} id={labelFor} type="radio" value={value} {...props} />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}

export default forwardRef(Radio)

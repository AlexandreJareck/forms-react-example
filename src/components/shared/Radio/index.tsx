import { InputHTMLAttributes } from 'react'
import { Container, Input, Label } from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelColor = 'white',
  labelFor,
  value,
  ...props
}: RadioProps) => {
  return (
    <Container>
      <Input id={labelFor} type="radio" value={value} {...props} />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
    </Container>
  )
}

export default Radio

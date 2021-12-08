import { InputHTMLAttributes } from 'react'
import { Container, Input, Label } from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  labelFor?: string
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelColor,
  labelFor,
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <Container>
      <Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
    </Container>
  )
}

export default Radio

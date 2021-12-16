import { DetailedHTMLProps, OptionHTMLAttributes } from 'react'
import { Option } from './styles'

export type OptionFieldProps = {
  value: string | number
  children: React.ReactNode
} & OptionHTMLAttributes<HTMLOptionElement>

const OptionField = ({ value, children, ...props }: OptionFieldProps) => {
  return (
    <Option value={value} {...props}>
      {children}
    </Option>
  )
}
export default OptionField

import { ChangeEventHandler } from 'react'
import { Container, Select } from './styles'

export type SelectFieldProps = {
  children: React.ReactNode
  onChange?: ChangeEventHandler<HTMLSelectElement>
}

const SelectField = ({ children, onChange }: SelectFieldProps) => (
  <Container>
    <Select onChange={onChange}>{children}</Select>
  </Container>
)

export default SelectField

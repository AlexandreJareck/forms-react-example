import { ChangeEventHandler, forwardRef, ForwardRefRenderFunction } from 'react'
import { Error } from '../Error'
import { Container, Select } from './styles'

export type OptionsData = {
  name: string
  value: string | number
}

export type SelectFieldProps = {
  children?: React.ReactNode
  onChange?: ChangeEventHandler<HTMLSelectElement>
  name?: string
  error?: string
  options?: OptionsData[]
}

const SelectField: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps
> = ({ children, onChange, name, error }, ref) => {
  return (
    <Container>
      <Select ref={ref} name={name} onChange={onChange}>
        {children}
      </Select>
      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
export default forwardRef(SelectField)

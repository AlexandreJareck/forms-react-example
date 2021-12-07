import { Wrapper } from './styles'

type CheckboxPros = {
  label?: string
  labelFor?: string
}

const Checkbox = ({ label, labelFor }: CheckboxPros) => (
  <Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </Wrapper>
)

export default Checkbox

import { Title, Wrapper } from './styles'

export type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <Wrapper>
    <Title>React Avançado</Title>
    {children}
  </Wrapper>
)

export default Main

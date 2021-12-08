import { Title, Wrapper } from './styles'

export type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => <Wrapper>{children}</Wrapper>

export default Main

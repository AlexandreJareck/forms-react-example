import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { Container as ContainerBase } from 'components/shared/Container'
import { Container, Content, SectionFooter } from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <Container>
    <ContainerBase>
      <Menu />
    </ContainerBase>

    <Content>{children}</Content>

    <SectionFooter>
      <ContainerBase>
        <Footer />
      </ContainerBase>
    </SectionFooter>
  </Container>
)

export default Base
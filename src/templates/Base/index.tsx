import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { Container as ContainerBase } from 'components/shared/Container'
import { useSession } from 'next-auth/react'
import { Container, Content, SectionFooter } from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { data: session, status } = useSession()

  return (
    <Container>
      <ContainerBase>
        <Menu username={session?.user?.name} loading={status === 'loading'} />
      </ContainerBase>

      <Content>{children}</Content>

      <SectionFooter>
        <ContainerBase>
          <Footer />
        </ContainerBase>
      </SectionFooter>
    </Container>
  )
}
export default Base

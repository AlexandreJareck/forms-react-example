import Heading from 'components/shared/Heading'
import Logo from 'components/shared/Logo'
import Link from 'next/link'
import {
  BannerBlock,
  BannerContent,
  Container,
  ContentWrapper,
  Subtitle,
  Footer,
  Content
} from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <Container>
    <BannerBlock>
      <BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </Subtitle>
        </div>

        <Footer>Won Games 2020 © Todos os Direitos Reservados</Footer>
      </BannerContent>
    </BannerBlock>

    <Content>
      <ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </ContentWrapper>
    </Content>
  </Container>
)

export default Auth

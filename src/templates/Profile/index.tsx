import Heading from 'components/shared/Heading'
import Base from 'templates/Base'
import { Main, Content } from './styles'
import { Container } from 'components/shared/Container'
import ProfileMenu from 'components/shared/ProfileMenu'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <Main>
        <ProfileMenu />
        <Content>{children}</Content>
      </Main>
    </Container>
  </Base>
)

export default Profile

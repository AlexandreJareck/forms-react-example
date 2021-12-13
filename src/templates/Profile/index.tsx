import Heading from 'components/shared/Heading'
import Base from 'templates/Base'
import { Main, Content } from './styles'
import { Container } from 'components/shared/Container'
import ProfileMenu from 'components/shared/ProfileMenu'

import { useRouter } from 'next/router'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const router = useRouter()
  console.log(router)
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <Main>
          <ProfileMenu activeLink={router.asPath} />
          <Content>{children}</Content>
        </Main>
      </Container>
    </Base>
  )
}
export default Profile

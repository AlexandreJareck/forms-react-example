import FormProfile, { FormProfileProps } from 'components/shared/FormProfile'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { QueryProfile } from 'models/profile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfile>({
    query: QUERY_PROFILE_ME
  })
  if (!session) {
    return { props: {} }
  }
  return {
    props: { session, username: data?.me?.username, email: data?.me?.email }
  }
}

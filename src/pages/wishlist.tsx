import gamesMock from 'components/shared/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import WishList, { WishlistTemplateProps } from 'templates/WishList'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { RecommendedData } from 'models/recommended'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo()

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<RecommendedData>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}

import gamesMock from 'components/shared/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import highlightMock from 'components/shared/Highlight/mock'
import WishList, { WishlistTemplateProps } from 'templates/WishList'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { RecommendedData } from 'models/recommended'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<RecommendedData>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}

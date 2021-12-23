import itemsMock from 'components/shared/CardList/mock'
import gamesMock from 'components/shared/GameCardSlider/mock'
import higlightMock from 'components/shared/Highlight/mock'
import cardsMock from 'components/shared/PaymentOptions/mock'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { RecommendedData } from 'models/recommended'
import Cart, { CartProps } from 'templates/Cart'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<RecommendedData>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}

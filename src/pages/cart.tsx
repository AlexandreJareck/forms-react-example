import itemsMock from 'components/shared/CardList/mock'
import gamesMock from 'components/shared/GameCardSlider/mock'
import higlightMock from 'components/shared/Highlight/mock'
import cardsMock from 'components/shared/PaymentOptions/mock'
import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}

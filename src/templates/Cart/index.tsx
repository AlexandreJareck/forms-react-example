import CartList, { CartListProps } from 'components/shared/CardList'
import { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import PaymentOptions, {
  PaymentOptionsProps
} from 'components/shared/PaymentOptions'
import Base from 'templates/Base'
import { Container } from 'components/shared/Container'
import { Content } from './styles'
import Heading from 'components/shared/Heading'
import Empty from 'components/shared/Empty'
import { Divider } from 'components/shared/Divider'
import Showcase from 'components/shared/Showcase'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart

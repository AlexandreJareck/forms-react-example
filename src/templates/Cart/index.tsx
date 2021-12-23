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
import { Divider } from 'components/shared/Divider'
import Showcase from 'components/shared/Showcase'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart

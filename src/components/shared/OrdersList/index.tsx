import Empty from '../Empty'
import GameItem, { GameItemProps } from '../GameItem'
import Heading from '../Heading'
import { Container } from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <Container>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </Container>
)

export default OrdersList

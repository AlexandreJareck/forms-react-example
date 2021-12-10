import GameItem, { GameItemProps } from 'components/GameItem'
import { Container, Footer, Total } from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CardList = ({ items, total }: CartListProps) => (
  <Container>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <Footer>
      Total <Total>{total}</Total>
    </Footer>
  </Container>
)

export default CardList

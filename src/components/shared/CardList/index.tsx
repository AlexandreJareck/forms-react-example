import GameItem, { GameItemProps } from 'components/shared/GameItem'
import Link from 'next/link'
import { Container, Footer, Total } from './styles'
import Button from 'components/shared/Button'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CardList = ({ items, total, hasButton = false }: CartListProps) => (
  <Container>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <Footer>
      {!hasButton && <span>Total:</span>}
      <Total>{total}</Total>

      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </Footer>
  </Container>
)

export default CardList

import GameItem, { GameItemProps } from 'components/shared/GameItem'
import Link from 'next/link'
import { Container, Footer, GamesList, Loading, Total } from './styles'
import Button from 'components/shared/Button'
import Empty from '../Empty'
import { useCart } from 'hooks/use-cart'
import Loader from '../Loader'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CardList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <Loading>
        <Loader />
      </Loading>
    )
  }

  return (
    <Container isEmpty={!items.length}>
      {items?.length ? (
        <>
          <GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </GamesList>

          <Footer>
            {!hasButton && <span>Total:</span>}
            <Total>{total}</Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </Container>
  )
}

export default CardList

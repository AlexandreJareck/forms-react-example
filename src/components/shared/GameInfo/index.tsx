import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import formatPrice from 'utils/format-price'
import Button from '../Button'
import CartButton from '../CartButton'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import { ButtonsWrapper, Container, Description } from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <Container>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <Description>{description}</Description>

    <ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </ButtonsWrapper>
  </Container>
)

export default GameInfo

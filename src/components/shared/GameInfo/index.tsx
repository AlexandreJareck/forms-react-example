import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import formatPrice from 'utils/format-price'
import Button from '../Button'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import { ButtonsWrapper, Container, Description } from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <Container>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <Description>{description}</Description>

    <ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </ButtonsWrapper>
  </Container>
)

export default GameInfo

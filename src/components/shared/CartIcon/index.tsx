import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { Badge, Container } from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <Container>
    {quantity > 0 && <Badge aria-label="Cart Items">{quantity}</Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </Container>
)

export default CartIcon

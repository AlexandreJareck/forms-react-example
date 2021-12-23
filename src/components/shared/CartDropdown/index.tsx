import CartIcon from 'components/shared/CartIcon'
import CartList from 'components/shared/CardList'
import Dropdown from 'components/shared/Dropdown'
import { GameItemProps } from 'components/shared/GameItem'
import { Container } from './styles'

const CartDropdown = () => (
  <Container>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </Container>
)

export default CartDropdown

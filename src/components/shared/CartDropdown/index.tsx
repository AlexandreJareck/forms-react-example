import CartIcon from 'components/shared/CartIcon'
import CartList from 'components/shared/CardList'
import Dropdown from 'components/shared/Dropdown'
import { GameItemProps } from 'components/shared/GameItem'
import { Container } from './styles'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <Container>
    <Dropdown title={<CartIcon />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </Container>
)

export default CartDropdown

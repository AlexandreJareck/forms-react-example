import Link from 'next/link'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from 'components/shared/Dropdown'
import { Nav, Username, Link as LinkStyle } from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <Username>{username}</Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <Nav>
      <Link href="/profile/me" passHref>
        <LinkStyle>
          <AccountCircle />
          <span>My profile</span>
        </LinkStyle>
      </Link>
      <Link href="/wishlist" passHref>
        <LinkStyle title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </LinkStyle>
      </Link>

      <Link href="/logout" passHref>
        <LinkStyle title="Sign out">
          <ExitToApp />
          <span>Sign out</span>
        </LinkStyle>
      </Link>
    </Nav>
  </Dropdown>
)

export default UserDropdown

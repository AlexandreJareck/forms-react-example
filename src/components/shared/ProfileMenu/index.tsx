import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'
import { Nav, Link as LinkStyle } from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <Nav>
    <Link href="/profile/me" passHref>
      <LinkStyle isActive={activeLink === '/profile/me'}>
        <AccountCircle size={24} />
        <span>My profile</span>
      </LinkStyle>
    </Link>

    <Link href="/profile/cards" passHref>
      <LinkStyle isActive={activeLink === '/profile/cards'}>
        <CreditCard size={24} />
        <span>My cards</span>
      </LinkStyle>
    </Link>

    <Link href="/profile/orders" passHref>
      <LinkStyle isActive={activeLink === '/profile/orders'}>
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </LinkStyle>
    </Link>

    <Link href="/logout" passHref>
      <LinkStyle>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </LinkStyle>
    </Link>
  </Nav>
)

export default ProfileMenu

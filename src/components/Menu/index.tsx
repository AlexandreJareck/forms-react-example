import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Button from 'components/shared/Button'
import Logo from 'components/shared/Logo'
import MediaMatch from 'components/shared/MediaMatch'
import Link from 'next/link'
import { useState } from 'react'
import CartDropdown from 'components/shared/CartDropdown'
import CartIcon from 'components/shared/CartIcon'
import UserDropdown from 'components/shared/UserDropdown'
import {
  Container,
  CreateAccount,
  IconWrapper,
  LogoWrapper,
  MenuFull,
  MenuGroup,
  MenuLink,
  MenuNav,
  RegisterBox
} from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <MediaMatch lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href="/games" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href="/games" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <MenuLink>My profile</MenuLink>
              </Link>
              <Link href="/profile/wishlist" passHref>
                <MenuLink>Wishlist</MenuLink>
              </Link>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <CreateAccount title="Sign up">Sign Up</CreateAccount>
            </Link>
          </RegisterBox>
        )}
      </MenuFull>
    </Container>
  )
}

export default Menu

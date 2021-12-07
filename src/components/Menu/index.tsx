import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

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
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

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
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="">Home</MenuLink>
          <MenuLink href="">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="">My account</MenuLink>
              <MenuLink href="">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Container>
  )
}

export default Menu

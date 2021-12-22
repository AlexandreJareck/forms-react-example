import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import formatPrice from 'utils/format-price'
import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import {
  BuyBox,
  Container,
  Content,
  Developer,
  FavButton,
  ImageBox,
  Img,
  Info,
  Price,
  Title
} from './styles'

export type GameCardProps = {
  slug?: string
  title: string
  developer: string
  img: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  price: number
  promotionalPrice?: number
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => {
  return (
    <Container>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <ImageBox>
          <Img src={img} alt={title} />
        </ImageBox>
      </Link>

      <Content>
        <Link href={`game/${slug}`} passHref>
          <Info>
            <Title>{title}</Title>
            <Developer>{developer}</Developer>
          </Info>
        </Link>
        <FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </FavButton>
        <BuyBox>
          {!!promotionalPrice && (
            <Price isPromotional>{formatPrice(price)}</Price>
          )}
          <Price>{formatPrice(promotionalPrice || price)}</Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </BuyBox>
      </Content>
    </Container>
  )
}

export default GameCard

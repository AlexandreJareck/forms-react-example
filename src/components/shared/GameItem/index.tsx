import {
  Container,
  GameContent,
  ImageBox,
  Content,
  Price,
  Title,
  DownloadLink,
  PaymentContent,
  CardInfo,
  Remove,
  Group
} from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'
import { RemoveShoppingCart } from 'styled-icons/material-outlined'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()
  return (
    <Container>
      <GameContent>
        <ImageBox>
          <img src={img} alt={title} />
        </ImageBox>

        <Content>
          <Title>
            {title}
            {!!downloadLink && (
              <DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </DownloadLink>
            )}
          </Title>
          <Group>
            <Price>{price}</Price>
            {isInCart(id) && (
              <Remove onClick={() => removeFromCart(id)}>
                <p>
                  <RemoveShoppingCart aria-label="Remove from cart" />
                </p>
              </Remove>
            )}
          </Group>
        </Content>
      </GameContent>

      {!!paymentInfo && (
        <PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </CardInfo>
        </PaymentContent>
      )}
    </Container>
  )
}
export default GameItem

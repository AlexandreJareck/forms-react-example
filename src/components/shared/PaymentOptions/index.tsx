import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Heading from '../Heading'
import Radio from '../Radio'
import Button from '../Button'
import {
  AddCard,
  Body,
  CardInfo,
  CardItem,
  CardsList,
  Container,
  Footer
} from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <Container>
    <Body>
      <Heading color="black" size="small" lineBottom>
        Payment
      </Heading>

      <CardsList>
        {cards?.map((card) => (
          <CardItem key={card.number}>
            <CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => ({})}
            />
          </CardItem>
        ))}

        <AddCard role="button">
          <Add size={14} /> Add a new credit card
        </AddCard>
      </CardsList>
    </Body>
    <Footer>
      <Button as="a" fullWidth minimal>
        Continue shopping
      </Button>
      <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
        Buy now
      </Button>
    </Footer>
  </Container>
)

export default PaymentOptions

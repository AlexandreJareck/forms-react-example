import CardsList, { CardsListProps } from 'components/shared/CardsList'
import Profile from 'templates/Profile'

import mockCards from 'components/shared/PaymentOptions/mock'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}

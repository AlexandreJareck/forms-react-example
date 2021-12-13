import OrdersList, { OrdersListProps } from 'components/shared/OrdersList'
import Profile from 'templates/Profile'

import ordersMock from 'components/shared/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}

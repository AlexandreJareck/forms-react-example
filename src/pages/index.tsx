import Main from 'components/Main'
import Heanding from 'components/shared/Heading'
import Button from 'components/shared/Button'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <Main>
      <Heanding>
        <Menu />
        <Footer />
      </Heanding>
    </Main>
  )
}

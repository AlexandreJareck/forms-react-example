import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/shared/ExploreSidebar/mock'
import gamesMock from 'components/shared/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}

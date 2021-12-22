import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/shared/BannerSlider/mock'
import gamesMock from 'components/shared/GameCardSlider/mock'
import highlightMock from 'components/shared/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}

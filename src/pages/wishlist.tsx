import gamesMock from 'components/shared/GameCardSlider/mock'
import highlightMock from 'components/shared/Highlight/mock'
import WishList, { WishlistTemplateProps } from 'templates/WishList'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}

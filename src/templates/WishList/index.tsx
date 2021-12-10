import Base from 'templates/Base'
import { Container } from 'components/shared/Container'
import Heading from 'components/shared/Heading'
import GameCard, { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import Showcase from 'components/shared/Showcase'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishList = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishList

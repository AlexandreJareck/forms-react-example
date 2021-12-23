import Base from 'templates/Base'
import { Container } from 'components/shared/Container'
import Heading from 'components/shared/Heading'
import GameCard, { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import Showcase from 'components/shared/Showcase'
import { Grid } from 'components/shared/Grid'
import { Divider } from 'components/shared/Divider'
import Empty from 'components/shared/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle?: string
}

const WishList = ({
  games,
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
      <Divider />
    </Container>

    <Showcase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishList

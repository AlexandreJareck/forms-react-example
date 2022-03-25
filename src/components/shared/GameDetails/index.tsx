import Heading from 'components/shared/Heading'
import MediaMatch from 'components/shared/MediaMatch'
import GameDetailsBlock, { Platform } from '../GameDetailsBlock'
import { Container, Content } from './styles'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  rating: Rating
  genres: string[]
  publisher: string
  releaseDate: string
  developer: string
  platforms?: Platform[]
}

const GameDetails = ({
  rating = 'BR10',
  genres,
  publisher,
  releaseDate,
  developer,
  platforms
}: GameDetailsProps) => {
  return (
    <Container>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <Content>
        <GameDetailsBlock title="Developer" description={developer} />
        <GameDetailsBlock
          title="Release Date"
          description={new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date('2020-02-05T16:30:41.392Z'))}
        />
        <GameDetailsBlock title="Platforms" withIcon platforms={platforms} />
        <GameDetailsBlock title="Publisher" description={publisher} />
        <GameDetailsBlock
          title="Rating"
          description={
            rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`
          }
        />
        <GameDetailsBlock title="Genres" description={genres.join(' / ')} />
      </Content>
    </Container>
  )
}

export default GameDetails

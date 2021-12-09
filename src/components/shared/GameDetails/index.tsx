import Heading from 'components/shared/Heading'
import MediaMatch from 'components/shared/MediaMatch'
import GameDetailsBlock from '../GameDetailsBlock'
import { Container, Content } from './styles'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  rating = 'BR0',
  genres = ['Role-playing']
}: GameDetailsProps) => {
  return (
    <Container>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <Content>
        <GameDetailsBlock title="Developer" description="Gearbox Software" />
        <GameDetailsBlock
          title="Release Date"
          description={new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date('2020-11-21T23:00:00'))}
        />
        <GameDetailsBlock title="Platforms" withIcon />
        <GameDetailsBlock title="Publisher" description="2K" />
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

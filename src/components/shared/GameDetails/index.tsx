import Heading from 'components/shared/Heading'
import MediaMatch from 'components/shared/MediaMatch'
import GameDetailsBlock from '../GameDetailsBlock'
import { Container, Content } from './styles'

const GameDetails = () => (
  <Container>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>

    <Content>
      <GameDetailsBlock title="Developer" description="Gearbox Software" />
      <GameDetailsBlock title="Release Date" description="Nov 16, 2019" />
      <GameDetailsBlock title="Platforms" />
      <GameDetailsBlock title="Publisher" description="2K" />
      <GameDetailsBlock title="Rating" description="18+" />
      <GameDetailsBlock title="Genres" description="Action / Adventure" />
    </Content>
  </Container>
)

export default GameDetails

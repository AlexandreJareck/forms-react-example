import Heading from 'components/shared/Heading'
import MediaMatch from 'components/shared/MediaMatch'
import { Block, Container, Content, Description, Label } from './styles'

const GameDetails = () => (
  <Container>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>

    <Content>
      <Block>
        <Label>Developer</Label>
        <Description>Gearbox Software</Description>
      </Block>
      <Block>
        <Label>Release Date</Label>
        <Description>Nov 16, 2019</Description>
      </Block>

      <Block>
        <Label>Platforms</Label>
      </Block>

      <Block>
        <Label>Publisher</Label>
        <Description>2K</Description>
      </Block>

      <Block>
        <Label>Rating</Label>
        <Description>18+</Description>
      </Block>

      <Block>
        <Label>Genres</Label>
        <Description>Action / Adventure</Description>
      </Block>
    </Content>
  </Container>
)

export default GameDetails

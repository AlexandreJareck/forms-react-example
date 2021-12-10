import Gallery, { GalleryImageProps } from 'components/shared/Gallery'
import GameDetails, { GameDetailsProps } from 'components/shared/GameDetails'
import { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import GameInfo, { GameInfoProps } from 'components/shared/GameInfo'
import TextContent from 'components/shared/TextContent'
import Base from 'templates/Base'
import {
  Cover,
  Main,
  SectionDescription,
  SectionGallery,
  SectionGameDetails,
  SectionGameInfo
} from './styles'
import Showcase from 'components/shared/Showcase'
import { Divider } from 'components/shared/Divider'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />

    <Main>
      <SectionGameInfo>
        <GameInfo {...gameInfo} />
      </SectionGameInfo>

      <SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </SectionGallery>

      <SectionDescription>
        <TextContent title="Description" content={description} />
      </SectionDescription>

      <SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </SectionGameDetails>

      <Showcase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </Main>
  </Base>
)

export default Game

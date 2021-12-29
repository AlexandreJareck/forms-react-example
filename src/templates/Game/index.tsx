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
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendedTitle: string
  upcomingTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  recommendedTitle,
  upcomingTitle
}: GameTemplateProps) => {
  return (
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
          title={upcomingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title={recommendedTitle} games={recommendedGames} />
      </Main>
    </Base>
  )
}

export default Game

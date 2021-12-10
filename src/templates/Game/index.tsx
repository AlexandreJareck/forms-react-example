import GameInfo, { GameInfoProps } from 'components/shared/GameInfo'
import Base from 'templates/Base'
import {
  Cover,
  Main,
  SectionDescription,
  SectionGallery,
  SectionGameInfo
} from './styles'
import Gallery, { GalleryImageProps } from 'components/shared/Gallery'
import TextContent from 'components/shared/TextContent'
export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
}

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
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
    </Main>
  </Base>
)

export default Game

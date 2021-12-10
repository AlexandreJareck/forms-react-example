import GameInfo, { GameInfoProps } from 'components/shared/GameInfo'
import Base from 'templates/Base'
import { Cover, Main, SectionGallery, SectionGameInfo } from './styles'
import Gallery, { GalleryImageProps } from 'components/shared/Gallery'
export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />

    <Main>
      <SectionGameInfo>
        <GameInfo {...gameInfo} />
      </SectionGameInfo>

      <SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </SectionGallery>
    </Main>
  </Base>
)

export default Game

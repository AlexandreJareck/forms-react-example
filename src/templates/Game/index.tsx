import GameInfo, { GameInfoProps } from 'components/shared/GameInfo'
import Base from 'templates/Base'
import { Cover, Main, SectionGameInfo } from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />

    <Main>
      <SectionGameInfo>
        <GameInfo {...gameInfo} />
      </SectionGameInfo>
    </Main>
  </Base>
)

export default Game

import Base from 'templates/Base'
import { Cover } from './styles'

export type GameTemplateProps = {
  cover: string
}

const Game = ({ cover }: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />
  </Base>
)

export default Game

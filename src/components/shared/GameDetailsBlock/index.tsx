import { Block, Description, Label } from './styles'

export type GameDetailsBlockProps = {
  title?: string
  description?: string
}

const GameDetailsBlock = ({ title, description }: GameDetailsBlockProps) => (
  <Block>
    {!!title && <Label>{title}</Label>}
    {!!description && <Description>{description}</Description>}
  </Block>
)

export default GameDetailsBlock

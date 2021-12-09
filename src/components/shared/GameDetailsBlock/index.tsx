import { Block, Description, Icon, IconsWrapper, Label } from './styles'
import { Linux, Windows, Apple } from 'styled-icons/fa-brands'

export type Platform = 'windows' | 'linux' | 'mac'
export type GameDetailsBlockProps = {
  title?: string
  description?: string
  withIcon?: boolean
  platforms?: Platform[]
}

const GameDetailsBlock = ({
  title,
  description,
  withIcon,
  platforms = ['windows', 'linux', 'mac']
}: GameDetailsBlockProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }
  return (
    <Block>
      {!!title && <Label>{title}</Label>}
      {!!withIcon && (
        <IconsWrapper>
          {platforms?.map((icon: Platform) => (
            <Icon key={icon}>{platformIcons[icon]}</Icon>
          ))}
        </IconsWrapper>
      )}
      {!!description && <Description>{description}</Description>}
    </Block>
  )
}
export default GameDetailsBlock

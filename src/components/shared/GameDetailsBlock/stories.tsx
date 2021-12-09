import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetailsBlock, { GameDetailsBlockProps } from '.'

export default {
  title: 'Game/GameDetailsBlock',
  component: GameDetailsBlock,
  parameters: {
    backgrouds: {
      default: 'won-dark'
    },
    args: {
      platforms: ['windows', 'linux', 'mac']
    }
  }
} as Meta

export const Default: Story<GameDetailsBlockProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetailsBlock {...args} />
  </div>
)

import { Meta, Story } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac'],
    rating: 'BR0',
    genres: ['teste', 'teste1'],
    releaseDate: '2020-02-05T16:30:41.392Z'
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)

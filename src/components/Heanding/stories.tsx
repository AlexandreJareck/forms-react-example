import { Story, Meta } from '@storybook/react/types-6-0'
import Heanding, { HeadingProps } from '.'

export default {
  title: 'Heanding',
  component: Heanding,
  argTypes: { children: { type: 'string' } }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heanding {...args} />

Default.args = {
  children: 'Most Populars'
}

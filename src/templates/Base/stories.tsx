import { Story, Meta } from '@storybook/react/types-6-0'
import Base, { BaseTemplateProps } from '.'

export default {
  title: 'Base',
  component: Base
} as Meta

export const Default: Story<BaseTemplateProps> = () => (
  <Base>
    <p></p>
  </Base>
)

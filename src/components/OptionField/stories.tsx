import { Story, Meta } from '@storybook/react/types-6-0'
import OptionField, { OptionFieldProps } from '.'

export default {
  title: 'OptionField',
  component: OptionField
} as Meta

export const Default: Story<OptionFieldProps> = (args) => (
  <OptionField {...args} />
)

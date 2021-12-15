import { Story, Meta } from '@storybook/react/types-6-0'
import SelectField, { SelectFieldProps } from '.'

export default {
  title: 'SelectField',
  component: SelectField
} as Meta

export const Default: Story<SelectFieldProps> = (args) => (
  <SelectField {...args}>
    <option value="" hidden>
      Type
    </option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
  </SelectField>
)

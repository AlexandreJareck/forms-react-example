import { Story, Meta } from '@storybook/react/types-6-0'
import FormRegister from '.'

export default {
  title: 'Form/FormRegister',
  component: FormRegister
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormRegister />
  </div>
)

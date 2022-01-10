import Heading from '../Heading'
import TextField from '../TextField'
import { Form } from './styles'
import Button from 'components/shared/Button'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => {
  return (
    <>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <Form>
        <TextField
          name="username"
          type="text"
          placeholder="Username"
          label="Username"
          initialValue={username}
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          label="E-mail"
          disabled
        />

        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />

        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New password"
        />

        <Button size="large">Save</Button>
      </Form>
    </>
  )
}

export default FormProfile

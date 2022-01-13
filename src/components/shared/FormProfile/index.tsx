import Heading from '../Heading'
import TextField from '../TextField'
import { Form as FormStyle } from './styles'
import Button from 'components/shared/Button'
import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import { useForm } from 'react-hook-form'
import { UsersPermissionsRegisterInput } from 'models/userRegister'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => {
  const methods = useForm<UsersPermissionsRegisterInput>({
    // resolver: yupResolver(schema)
  })

  async function handleSubmit(user: UsersPermissionsRegisterInput) {
    console.log(user)
  }

  return (
    <>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>
      <Form methods={methods} onSubmit={handleSubmit}>
        <FormStyle>
          <HFTextField
            label="Username"
            name="username"
            placeholder="Username"
            type="text"
            defaultValue={username}
          />

          <HFTextField
            name="email"
            defaultValue={email}
            type="email"
            placeholder="E-mail"
            label="E-mail"
            disabled
          />

          <HFTextField
            name="password"
            type="password"
            placeholder="Type your password"
            label="Password"
          />

          <HFTextField
            name="new_password"
            type="password"
            placeholder="New password"
            label="New password"
          />

          <Button size="large">Save</Button>
        </FormStyle>
      </Form>
    </>
  )
}

export default FormProfile

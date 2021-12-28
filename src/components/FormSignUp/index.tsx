import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import Button from 'components/shared/Button'
import { ForgotPassword, FormContainer, FormLink } from 'components/shared/Form'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { UsersPermissionsRegisterInput } from 'models/userRegister'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import schema from './schema'

const FormSignUp = () => {
  const [createUser] = useMutation(MUTATION_REGISTER)

  async function handleSubmit(user: UsersPermissionsRegisterInput) {
    console.log(user)
    createUser({
      variables: {
        input: {
          username: user.username,
          email: user.email,
          password: user.password
        }
      }
    })
  }
  const methods = useForm<UsersPermissionsRegisterInput>({
    resolver: yupResolver(schema)
  })
  const {
    watch,
    formState: { isSubmitting }
  } = methods

  return (
    <FormContainer>
      <Form methods={methods} onSubmit={handleSubmit}>
        <HFTextField
          name="username"
          placeholder="Name"
          type="text"
          icon={<AccountCircle />}
        />
        <HFTextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <HFTextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <ForgotPassword href="#">Forgot your password?</ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={isSubmitting}>
          Sign up now
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </Form>
    </FormContainer>
  )
}

export default FormSignUp

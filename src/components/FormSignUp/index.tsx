import { ForgotPassword, FormLink } from 'components/FormSignIn/styles'
import Button from 'components/shared/Button'
import TextField from 'components/shared/TextField'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import { Container } from './styles'

const FormSignUp = () => (
  <Container>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <ForgotPassword href="#">Forgot your password?</ForgotPassword>

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-up">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </Container>
)

export default FormSignUp

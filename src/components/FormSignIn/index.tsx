import Button from 'components/shared/Button'
import TextField from 'components/shared/TextField'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import { Container, ForgotPassword, FormLink } from './styles'

const FormSignIn = () => (
  <Container>
    <form>
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
      <ForgotPassword href="#">Forgot your password?</ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </Container>
)

export default FormSignIn

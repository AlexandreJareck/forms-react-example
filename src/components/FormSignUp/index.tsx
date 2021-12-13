import Button from 'components/shared/Button'
import { ForgotPassword, FormContainer, FormLink } from 'components/shared/Form'
import TextField from 'components/shared/TextField'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

const FormSignUp = () => {
  return (
    <FormContainer>
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
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}

export default FormSignUp

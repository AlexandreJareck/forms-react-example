import Button from 'components/shared/Button'
import {
  ForgotPassword,
  FormContainer,
  FormLink,
  FormLoading
} from 'components/shared/Form'
import Link from 'next/link'
import { signIn, SignInResponse } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Email, Lock } from 'styled-icons/material-outlined'
import { useForm } from 'react-hook-form'
import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import { useState } from 'react'

type UserLogin = {
  email: string
  password: string
}

const FormSignIn = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(user: UserLogin) {
    setLoading(true)

    const result = await signIn<any>('credentials', {
      ...user,
      redirect: false,
      callbackUrl: '/'
    })
    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    console.error('email ou senha inválida')
  }

  const methods = useForm<UserLogin>({
    // resolver: yupResolver(schema)
  })
  const {
    watch,
    formState: { isSubmitting }
  } = methods
  return (
    <FormContainer>
      <Form methods={methods} onSubmit={handleSubmit}>
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

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </Form>
    </FormContainer>
  )
}
export default FormSignIn

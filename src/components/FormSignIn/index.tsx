import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import Button from 'components/shared/Button'
import {
  ForgotPassword,
  FormContainer,
  FormLink,
  FormLoading
} from 'components/shared/Form'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Email, Lock } from 'styled-icons/material-outlined'

type UserLogin = {
  email: string
  password: string
}

const FormSignIn = () => {
  const routes = useRouter()
  const { push, query } = routes
  const [loading, setLoading] = useState(false)

  async function handleSubmit(user: UserLogin) {
    setLoading(true)

    const result = await signIn<any>('credentials', {
      ...user,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
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
        <Link href="/forgot-password" passHref>
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </Link>

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

import { useForm } from 'react-hook-form'
import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import Button from 'components/shared/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { Lock, ErrorOutline } from 'styled-icons/material-outlined'

import { FormContainer, FormError, FormLoading } from 'components/shared/Form'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import schema from './schema'

const FormResetPassword = () => {
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const routes = useRouter()
  const { push, query } = routes

  async function handleSubmit(reset: ResetPassword) {
    setLoading(true)

    const result = await signIn('credentials', {
      ...reset,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    // if (result?.url) {
    //   return push(result?.url)
    // }

    setLoading(false)

    // jogar o erro
    setFormError('username or password is invalid')
  }

  type ResetPassword = {
    password: string
    confirm_password: string
  }
  const methods = useForm<ResetPassword>({
    resolver: yupResolver(schema)
  })
  const {
    formState: { isSubmitting }
  } = methods

  return (
    <FormContainer>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <Form methods={methods} onSubmit={handleSubmit}>
        <HFTextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <HFTextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default FormResetPassword

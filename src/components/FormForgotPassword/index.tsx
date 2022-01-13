import { Form } from 'components/hook-form/Form'
import HFTextField from 'components/hook-form/HFTextField'
import Button from 'components/shared/Button'
import { FormContainer, FormError, FormLoading } from 'components/shared/Form'
import { signIn, SignInResponse, SignOutParams } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorOutline } from 'styled-icons/material-outlined'

type ForgotPasswordModel = {
  email: string
}

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const routes = useRouter()
  const { push, query } = routes
  const methods = useForm<ForgotPasswordModel>({
    // resolver: yupResolver(schema)
  })

  async function handleSubmit(forgotPassword: ForgotPasswordModel) {
    console.log(forgotPassword)

    setLoading(true)

    const errors = {} // validate after

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(forgotPassword)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormContainer>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <Form methods={methods} onSubmit={handleSubmit}>
        <HFTextField
          name="email"
          type="email"
          placeholder="E-mail"
          label="E-mail"
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default FormForgotPassword

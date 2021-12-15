import Button from 'components/shared/Button'
import { ForgotPassword, FormContainer, FormLink } from 'components/shared/Form'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import HFTextField from 'components/hook-form/HFTextField'
import { Form } from 'components/hook-form/Form'
import { FocusEvent, FocusEventHandler, useState } from 'react'
import HFCheckbox from 'components/hook-form/HFCheckBox'
import Radio from 'components/shared/Radio'
import HFRadioField from 'components/hook-form/HFRadioField'

type FormRegisterFields = {
  name: string
  email: string
  password: string
  confirmPassword: string
  isCheck: boolean
  radio: string
}

const FormRegister = () => {
  const [isChecked, setIsChecked] = useState(false)

  async function stall(stallTime = 3000) {
    await new Promise((resolve) => setTimeout(resolve, stallTime))
  }

  async function onSubmit(data: FormRegisterFields) {
    console.log(data)
    await stall()
  }

  const methods = useForm<FormRegisterFields>({
    resolver: yupResolver(schema)
  })

  const {
    watch,
    register,
    formState: { isSubmitting }
  } = methods

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <FormContainer>
      <Form methods={methods} onSubmit={onSubmit}>
        <HFTextField
          name="name"
          placeholder="Name"
          type="text"
          onBlur={(e) => onBlur(e)}
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
        <HFTextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
        />
        <HFCheckbox
          key="isCheck"
          {...register('isCheck', {
            onChange: () => setIsChecked(!isChecked)
          })}
          label="isCheck"
          labelFor="isCheck"
          labelColor={'black'}
          isChecked={isChecked}
        />

        <br />
        <HFRadioField
          key="Radio"
          id="Radio"
          value="Radio"
          name="radio"
          label="Radio"
          labelFor="Radio"
          labelColor="black"
        />
        <br />
        <HFRadioField
          key="Radio2"
          id="Radio2"
          value="Radio2"
          name="radio"
          label="Radio2"
          labelFor="Radio2"
          labelColor="black"
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

export default FormRegister

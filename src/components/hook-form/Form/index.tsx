import { yupResolver } from '@hookform/resolvers/yup'
import { ReactNode, useEffect, useRef } from 'react'
import {
  DeepPartial,
  FormProvider,
  Path,
  UnpackNestedValue,
  useForm,
  UseFormReturn
} from 'react-hook-form'
import { AnyObjectSchema } from 'yup'

export type FormHandles<T> = UseFormReturn<T>

export type FormProps<T> = {
  children: ReactNode | ((methods: FormHandles<T>) => ReactNode)

  onSubmit: (values: T, methods: FormHandles<T>) => Promise<void> | void
  defaultValues?: UnpackNestedValue<DeepPartial<T>>
} & (
  | {
      methods?: FormHandles<T>
      schema?: never
    }
  | { methods?: never; schema?: AnyObjectSchema }
)

export function Form<T>({
  children,
  schema,
  defaultValues,
  onSubmit,
  methods: customMethods
}: FormProps<T>) {
  const isFirstRender = useRef(true)
  const methods = useForm<T>({
    ...(schema && { resolver: yupResolver(schema) }),
    ...(!!defaultValues && {
      defaultValues: defaultValues as UnpackNestedValue<DeepPartial<T>>
    })
  })

  useEffect(() => {
    if (isFirstRender.current) return
    console.log(isFirstRender)
    defaultValues &&
      Object.entries(defaultValues).map(([key, value]) =>
        methods.setValue(key as Path<T>, value)
      )
  }, [defaultValues, methods])

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  const formMethods = customMethods || methods

  return (
    <FormProvider {...formMethods}>
      <form
        style={{ width: '100%' }}
        onSubmit={(e) => {
          e.stopPropagation()
          formMethods.handleSubmit((values) =>
            onSubmit(values as T, formMethods)
          )(e)
        }}
      >
        {typeof children === 'function' ? children(formMethods) : children}
      </form>
    </FormProvider>
  )
}

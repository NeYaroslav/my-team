import { useEffect } from 'react'
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form'
import resolver, { ILogInCredentials } from './resolver'
import { useSignUpMutation } from '../../../redux/services/authApi'
import { useAppDispatch } from '../../../redux/hooks'
import { setToken } from '../../../redux/slices/authSlice'

export interface WithProps {
  register: UseFormRegister<ILogInCredentials>
  onSubmit: (
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
  errors: FieldErrors<ILogInCredentials>
  isLoading: boolean
}

type WithOutProps<T> = Omit<T, keyof WithProps>

const withSignUpForm = <T extends WithProps>(WrappedComponent: React.FC<T>) => {
  const componentWithNewProps: React.FC<WithOutProps<T>> = (props) => {
    const [signUp, { error: responseError, isLoading }] = useSignUpMutation()
    const dispatch = useAppDispatch()

    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
    } = useForm({ resolver, mode: 'onTouched', shouldUnregister: true})

    useEffect(() => {
      if(typeof responseError == 'string') {
        const name = responseError.includes('username') ? 'username' : 'root'
        setError(name, {message: responseError as string, type: 'validate'})
      }
    }, [responseError])

    const onSubmit = handleSubmit(async (values) => {
      const data = await signUp(values).unwrap()
      dispatch(setToken(data.token))
    })

    const newProps = {
      ...props,
      errors,
      onSubmit,
      register,
      isLoading,
    } as T

    return <WrappedComponent {...newProps} />
  }
  return componentWithNewProps
}

export default withSignUpForm

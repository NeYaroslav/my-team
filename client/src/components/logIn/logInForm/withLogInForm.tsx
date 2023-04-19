import { useEffect } from 'react'
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import resolver, { ILogInCredentials } from './resolver'
import { useLogInMutation } from '../../../redux/services/authApi'
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

const withLogInForm = <T extends WithProps>(WrappedComponent: React.FC<T>) => {
  const componentWithNewProps: React.FC<WithOutProps<T>> = (props) => {
    const [logIn, { isLoading, error: responseError }] = useLogInMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
    } = useForm({ resolver, mode: 'onTouched', shouldUnregister: true })

    useEffect(() => {
      if (typeof responseError == 'string') {
        const name = responseError.includes('user') ? 'password' : 'root'
        setError(name, { message: responseError as string, type: 'validate' })
      }
    }, [responseError])

    const onSubmit = handleSubmit(async (values) => {
      const data = await logIn(values).unwrap()
      dispatch(setToken(data))
      navigate('/home', {
        replace: true,
      })
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

export default withLogInForm

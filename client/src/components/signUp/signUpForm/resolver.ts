import { Resolver, FieldErrors } from 'react-hook-form'
import {
  validateConfirmedPassword,
  validatePassword,
  validateUsername,
} from '../../../utils/validation'

export interface ILogInCredentials {
  username: string
  password: string
  name: string
  confirmedPassword: string
}

const resolver: Resolver<ILogInCredentials> = async (values) => {
  values = values.username
    ? values
    : {
        username: '',
        password: '',
        confirmedPassword: '',
        name: '',
      }
  const errors: FieldErrors<ILogInCredentials> = {}

  const usernameError = validateUsername(values.username)
  const passwordError = validatePassword(values.password)
  const confirmedPasswordError = validateConfirmedPassword(
    values.confirmedPassword,
    values.password
  )
  if (usernameError) errors.username = usernameError
  if (passwordError) errors.password = passwordError
  if (confirmedPasswordError) errors.confirmedPassword = confirmedPasswordError

  return {
    values,
    errors,
  }
}

export default resolver

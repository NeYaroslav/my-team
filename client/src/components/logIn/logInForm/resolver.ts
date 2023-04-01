import { Resolver, FieldErrors } from 'react-hook-form'
import { validatePassword, validateUsername } from '../../../utils/validation'

export interface ILogInCredentials {
  username: string
  password: string
}

const resolver: Resolver<ILogInCredentials> = async (values) => {
  values = values.username
    ? values
    : {
        username: '',
        password: '',
      }
  const errors: FieldErrors<ILogInCredentials> = {}

  const usernameError = validateUsername(values.username)
  const passwordError = validatePassword(values.password)
  if (passwordError) errors.password = passwordError
  if (usernameError) errors.username = usernameError

  return {
    values,
    errors,
  }
}

export default resolver

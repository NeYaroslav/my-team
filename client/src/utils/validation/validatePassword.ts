import { FieldError } from 'react-hook-form'

const validatePassword = (password: string): FieldError | void => {
  if (!password.length)
    return {
      type: 'required',
      message: 'Password is required',
    }
  if (password.length < 8)
    return {
      type: 'min',
      message: 'Min password length is 8 chars',
    }
  if (password.length > 16)
    return {
      type: 'max',
      message: 'Max password length is 16 chars',
    }
}

export default validatePassword

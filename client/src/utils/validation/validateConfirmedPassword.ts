import { FieldError } from 'react-hook-form'

const validateConfirmedPassword = (
  confirmedPassword: string,
  password: string
): FieldError | void => {
  if (!password.length)
    return {
      type: 'required',
      message: 'Confirmed password is required',
    }
  if (confirmedPassword !== password)
    return {
      type: 'validate',
      message: 'Passwords do not match',
    }
}

export default validateConfirmedPassword

import { FieldError } from 'react-hook-form'

const validateUsername = (username: string): FieldError | void => {
  if (!username.length)
    return {
      type: 'required',
      message: 'Username is required',
    }
  if (!username.match(/^[A-Z0-9_]+$/gi))
    return {
      type: 'pattern',
      message:
        'Username should consist of the characters from Lattin alphabet or numbers or "_"',
    }
  if (username.length < 4)
    return {
      type: 'min',
      message: 'Min username length is 4 chars',
    }
  if (username.length > 16)
    return {
      type: 'max',
      message: 'Max username length is 16 chars',
    }
}

export default validateUsername

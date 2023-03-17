import { Request, ResponseWithError, NextFunction } from '../types'

const verifyCredential = async (
  req: Request,
  res: ResponseWithError,
  next: NextFunction
) => {
  const { password, username } = req.body
  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    username.length === 0 ||
    password.length === 0
  )
    return res
      .status(400)
      .json({ message: 'password, username fields are required' })

  next()
}

export default verifyCredential

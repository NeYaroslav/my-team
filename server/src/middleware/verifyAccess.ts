import { RequestWithAuthId, ResponseWithError, NextFunction } from '../types'
import jwt, { Secret } from 'jsonwebtoken'

const verifyAccess = async (
  req: RequestWithAuthId,
  res: ResponseWithError,
  next: NextFunction
) => {
  const header = req.headers?.authorization
  const accessToken = header?.split(' ')[1]

  if (!accessToken) return res.status(401).json({ message: 'Unauthorizd user' })

  try {
    const { id } = jwt.verify(
      accessToken,
      process.env.ACCESS_SECRET as Secret
    ) as { id: number }
    req.body.authId = id
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Something went wrong', error })
  }
}

export default verifyAccess

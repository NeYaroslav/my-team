import jwt, { Secret } from 'jsonwebtoken'
import { findUserByToken } from '../services/auth'
import type { Request, ResponseWithError } from '../types'

const refresh = async (req: Request, res: ResponseWithError) => {
  const refreshToken = req.cookies?.jwt
  if (typeof refreshToken !== 'string' || refreshToken.length === 0)
    return res.status(403).json({ message: 'you are unauthorized' })

  try {
    const { id } = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET as Secret
    ) as { id: number }
    if (typeof id !== 'number') throw new Error('invalid token')
    await findUserByToken(refreshToken)
    const accessToken = jwt.sign({ id }, process.env.ACCESS_SECRET as Secret, {
      expiresIn: `${process.env.ACCESS_EXPIRES_IN}s`,
    })
    res.json({ token: accessToken })
  } catch (error) {
    res.clearCookie('jwt')
    return res.status(400).json({ message: 'something went wrong', error })
  }
}
export default refresh

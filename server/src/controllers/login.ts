import { Users } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import { findUserByUsername, updateRefreshToken } from '../services/auth'
import type { ResponseWithError, Request } from '../types'

const login = async (req: Request, res: ResponseWithError) => {
  const { password, username } = req.body
  let foundUser: Users | null = null

  try {
    foundUser = await findUserByUsername(username)
    const isValid = await bcrypt.compare(password, foundUser.password)
    if (isValid !== true) throw new Error()
    const refreshToken = jwt.sign(
      { id: foundUser.id },
      process.env.REFRESH_SECRET as Secret,
      { expiresIn: `${process.env.REFRESH_EXPIRES_IN}s` }
    )
    await updateRefreshToken(foundUser.id, refreshToken)
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      maxAge: +(process.env.REFRESH_EXPIRES_IN ?? 0) * 1000,
    })
    res.redirect(303, './refresh')
  } catch (error) {
    return res.status(400).json({ message: 'No users found', error })
  }
}
export default login

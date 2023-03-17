import bcrypt from 'bcrypt'
import { registerUser } from '../services/auth'
import type { ResponseWithError, Request } from '../types'

const register = async (req: Request, res: ResponseWithError) => {
  const { password, username } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await registerUser(username, hashedPassword)
    res.redirect(307, './login')
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Could not register the user with this username' })
  }
}

export default register

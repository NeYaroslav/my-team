import express from 'express'
import { login, refresh, register } from '../controllers/index'
import verifyCredential from '../middleware/verifyCredential'

const authRouter = express.Router()

authRouter.post('/login', verifyCredential, login)
authRouter.post('/register', verifyCredential, register)
authRouter.get('/refresh', refresh)

export default authRouter

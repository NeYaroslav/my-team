import express from 'express'
import login from '../controllers/login'
import refresh from '../controllers/refresh'
import register from '../controllers/register'
import verifyCredential from '../middleware/verifyCredential'

const authRouter = express.Router()

authRouter.post('/login', verifyCredential, login)
authRouter.post('/register', verifyCredential, register)
authRouter.get('/refresh', refresh)

export default authRouter

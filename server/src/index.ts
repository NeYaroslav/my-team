import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { authRouter, teamsRouter } from './routes'
import verifyAccess from './middleware/verifyAccess'

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: '*' }))
// routes
// auth
app.use('/auth', authRouter)
// protectedRoutes
app.use(verifyAccess)

app.get('/team', (req, res) => res.sendStatus(200))
// app.use('/teams', teamsRouter)

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})

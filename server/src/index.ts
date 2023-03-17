import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { authRouter, teamsRouter } from './routes'

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: '*' }))
// routes
// auth
app.use('/auth', authRouter)
// protectedRoutes
app.use('/teams', teamsRouter)

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})

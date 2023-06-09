import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { authRouter, notesRouter, teamsRouter } from './routes'
import verifyAccess from './middleware/verifyAccess'

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
// routes
// auth
app.use((req, res, next) => {
  console.log(req.body);
  next()
})
app.use('/auth', authRouter)
// protectedRoutes
app.use(verifyAccess)

app.use('/teams', teamsRouter)

app.use('/notes', notesRouter)

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cookieParser())
app.use(cors({ origin: '*' }))

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})

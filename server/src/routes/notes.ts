import express from 'express'
import { getNotes } from '../controllers'

const notesRouter = express.Router()

notesRouter.post('/:id')
notesRouter.get('/:id', getNotes)

export default notesRouter

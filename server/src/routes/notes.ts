import express from 'express'
import { getNotes, createNote } from '../controllers'
import verifyTeamAccess from '../middleware/verifyTeamAccess'

const notesRouter = express.Router()

notesRouter.post('/:id', verifyTeamAccess, createNote)
notesRouter.get('/:id', getNotes)

export default notesRouter

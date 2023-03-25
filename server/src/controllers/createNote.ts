import { ResponseWithError, RequestWithAuthId } from '../types'
import { createNote as createNoteFunc } from '../services/notes'

const createNote = async (req: RequestWithAuthId, res: ResponseWithError) => {
  const { id: teamId } = req.params
  const { title, responsibleId } = req.body

  if (
    typeof teamId !== 'string' ||
    typeof title !== 'string' ||
    typeof responsibleId !== 'string'
  )
    return res.status(400).json({ message: 'team id required' })

  try {
    if (isNaN(+responsibleId) || isNaN(+teamId))
      throw new Error('Responsible id type must be number')

    const createdTeam = await createNoteFunc(title, +responsibleId, +teamId)
    return res.status(200).json(createdTeam)
  } catch (error) {
    return res.status(400).json({message: 'Something went wrong', error})
  }
}

export default createNote

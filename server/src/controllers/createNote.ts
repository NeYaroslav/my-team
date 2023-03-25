import { ResponseWithError, RequestWithAuthTeams } from '../types'
import { createNote as createNoteFunc } from '../services/notes'

const createNote = async (req: RequestWithAuthTeams, res: ResponseWithError) => {
  const { id: teamId } = req.params
  const { title, responsibleId } = req.body

  if (
    isNaN(parseInt(teamId)) ||
    typeof title !== 'string' ||
    typeof responsibleId !== 'string' ||
    isNaN(parseInt(teamId))
  )
    return res.status(400).json({ message: 'team id required' })

  try {
    if(!req.body.authTeams.includes(+teamId)) throw new Error('Only leader can create notes')

    const createdTeam = await createNoteFunc(title, +responsibleId, +teamId)
    return res.status(200).json(createdTeam)
  } catch (error) {
    return res.status(400).json({message: 'Something went wrong', error})
  }
}

export default createNote

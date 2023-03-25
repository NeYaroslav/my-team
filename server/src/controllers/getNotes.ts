import { ResponseWithError, RequestWithAuthId } from '../types'
import { getNotesByTeamId } from '../services/notes'

const getNotes = async (req: RequestWithAuthId, res: ResponseWithError) => {
  const { id } = req.params

  if (isNaN(parseInt(id)))
    return res.status(400).json({ message: 'team id required' })

  try {
    const notes = await getNotesByTeamId(id)
    res.status(200).json(notes)
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong', error })
  }
}

export default getNotes

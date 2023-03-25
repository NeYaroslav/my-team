import { RequestWithAuthId, ResponseWithError } from '../types'
import { createTeam } from '../services/teams'

const createLeadershipTeam = async (
  req: RequestWithAuthId,
  res: ResponseWithError
) => {
  const { authId, title } = req.body
  if (typeof title !== 'string')
    return res.status(400).json({ message: 'title required' })

  try {
    const userId = await createTeam(title, authId)
    return res.json(userId)
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong', error })
  }
}

export default createLeadershipTeam

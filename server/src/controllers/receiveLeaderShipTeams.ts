import { RequestWithAuthId, ResponseWithError } from '../types'
import { getLeadershipTeams } from '../services/teams'

const receiveLeaderShipTeams = async (
  req: RequestWithAuthId,
  res: ResponseWithError
) => {
  try {
    const userId = await getLeadershipTeams(req.body.authId)
    return res.json(userId)
  } catch (error) {
    return res.status(400).json({ message: 'something went wrong', error })
  }
}

export default receiveLeaderShipTeams

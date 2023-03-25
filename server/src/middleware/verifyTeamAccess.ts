import { getTeamsByLeaderId } from '../services/teams'
import { RequestWithAuthId, ResponseWithError, NextFunction } from '../types'

const verifyTeamAccess = async (
  req: RequestWithAuthId,
  res: ResponseWithError,
  next: NextFunction
) => {
  const { id } = req.params
  
  if(isNaN(parseInt(id))) return res.status(400).json({message: "Team id must be type of string"})

  try {
    const foundTeams = await getTeamsByLeaderId(+id)

    req.body.authTeams = foundTeams.map(team => team.id)
  } catch (error) {
    return res.status(400).json({message: 'Something went wrong'})
  }
}
export default verifyTeamAccess
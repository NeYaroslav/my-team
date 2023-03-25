import express from 'express'
import { receiveLeaderShipTeams, createLeadershipTeam } from '../controllers'

const teamsRouter = express.Router()

// teamsRouter.get('/teams', )
teamsRouter.get('/leadership', receiveLeaderShipTeams)
teamsRouter.post('/', createLeadershipTeam)

export default teamsRouter

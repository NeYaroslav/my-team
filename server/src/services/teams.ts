import database from '../database'

const getLeadershipTeams = async (leaderId: number) => {
  return database.teams.findMany({
    where: {
      leaderId,
    },
  })
}

const createTeam = async (title: string, leaderId: number) => {
  return database.teams.create({
    data: {
      title,
      leaderId,
    },
  })
}

const getTeamsByLeaderId = async (leaderId: number) => {
  return database.teams.findMany({
    where: {
      leaderId: leaderId,
    },
    select: {
      id: true,
    },
  })
}

export { getLeadershipTeams, createTeam, getTeamsByLeaderId }

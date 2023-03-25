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

const getTeamById = async (id: number) => {
  return database.teams.findFirstOrThrow({
    where: {
      id,
    },
  })
}

export { getLeadershipTeams, createTeam, getTeamById }

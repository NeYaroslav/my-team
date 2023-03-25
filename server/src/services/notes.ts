import database from '../database'

const createNote = async (
  title: string,
  responsibleId: number,
  teamId: number
) => {
  return database.notes.create({
    data: {
      title,
      responsibleId,
      teamId,
    },
  })
}

const getNotesByTeamId = async (teamId) => {
  return database.notes.findMany({
    where: {
      teamId,
    },
  })
}

export { createNote, getNotesByTeamId }

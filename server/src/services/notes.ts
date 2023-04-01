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

const getNotesByTeamId = async (teamId: number) => {
  return database.notes.findMany({
    where: {
      teamId,
    },
  })
}

export { createNote, getNotesByTeamId }

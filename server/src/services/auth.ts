import database from '../database'

const registerUser = async (username: string, password: string) => {
  return database.users.create({
    data: {
      password: password,
      username: username,
    },
  })
}

const findUserByUsername = async (username: string) => {
  return database.users.findFirstOrThrow({
    where: {
      username: username,
    },
  })
}

const updateRefreshToken = async (userId: number, refreshToken: string) => {
  return database.users.update({
    where: {
      id: userId,
    },
    data: {
      refreshToken: refreshToken,
    },
  })
}

const findUserByToken = async (refreshToken: string) => {
  return database.users.findFirstOrThrow({
    where: {
      refreshToken: refreshToken,
    },
  })
}

export { findUserByUsername, registerUser, updateRefreshToken, findUserByToken }

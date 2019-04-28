
import bcrypt from 'bcrypt'

function hashPassword(password) {
  const salt = bcrypt.genSaltSync()
  return new Promise((resolve) => {
    bcrypt.hash(password, salt, (err, hash) => {
      resolve(err ? null : hash)
    })
  })
}

const db = {
  users: {}
}

export async function addUser(user) {
  user.password = await hashPassword(user.password)
  db.users[user.email] = user
}

function checkPassword(password, user) {
  return new Promise((resolve) => {
    bcrypt.compare(password, user.password, (err, result) => {
      resolve(err ? false : result)
    })
  })
}

export function authUser({ email, password }) {
  if (email in db.users && db.users[email]) {
    return checkPassword(password, db.users[email])
  }
  return false
}

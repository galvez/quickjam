
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

import { sign, verify as verifyJWT } from 'jsonwebtoken'
import { json } from 'body-parser'
import { parse } from 'cookie'
import { addUser, authUser, getUser } from './db'

const expiresIn = '90d'
const sessionSecret = 'some truly random value'

function verify (...args) {
  try {
    return verifyJWT(...args)
  } catch (_) {}
}

export default [
  {
    path: '/api/ping',
    handler(req, res, next) {
      res.end(`API pong at ${new Date().getTime()}`)
    }
  },
  json(),
  (req, res, next) => {
    res.json = (obj) => res.write(JSON.stringify(obj))
    next()
  },
  {
    path: '/api/login',
    async handler(req, res, next) {
      if (req.method === 'POST' && await authUser(req.body)) {
        const payload = { email: req.body.email }
        const token = sign(payload, sessionSecret, { expiresIn })
        res.json({ token })
        res.end()
        return
      }
      res.writeHead(403, 'Forbidden')
      res.end()
    }
  },
  {
    path: '/api/users',
    async handler(req, res, next) {
      if (req.method === 'POST') {
        await addUser(req.body)
        res.json({ success: true })
        res.end()
        return
      }
      res.writeHead(403, 'Forbidden')
      res.end()
    }
  },
  (req, res, next) => {
    if (!req.url.startsWith('/api')) {
      return next()
    }
    if (!req.headers.authorization) {
      res.statusCode = 401
      res.end()
      return
    }
    const tokenMatch = req.headers.authorization.match(/Bearer (.+)/)
    if (tokenMatch) {
      const jwtData = verify(tokenMatch[1], sessionSecret)
      if (jwtData) {
        req.email = jwtData.email
        req.token = tokenMatch[1]
        return next()
      }
    }
    res.statusCode = 401
    res.end()
  },
  {
    path: '/api/user',
    async handler(req, res, next) {
      const user = await getUser(req.email)
      res.json({ user })
      res.end()
    }
  },
  (req, res, next) => {
    const cookies = req.headers.cookie || ''
    const parsedCookies = parse(cookies) || {}
    const token = parsedCookies['quickjam-auth-token']
    if (token) {
      const jwtData = verify(token, sessionSecret)
      if (jwtData) {
        req.email = jwtData.email
        req.token = token
        return next()
      }
    }
    next()
  }
]

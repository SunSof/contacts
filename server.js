// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const fs = require('fs')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

function isAuthenticated ({ login, password }) {
  return (
    userdb.users.findIndex(
      user => user.login === login && user.password === password
    ) !== -1
  )
}

function encode (obj) {
  const str = JSON.stringify(obj)
  var buff = new Buffer(str)
  return buff.toString('base64')
}

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/login', (req, res) => {
  const { login, password } = req.body
  if (isAuthenticated({ login, password }) === false) {
    const status = 401
    const message = 'Incorrect login or password'
    res.status(status).json({ status, message })
    return
  }
  res.header('Access-Control-Expose-Headers', 'Token')
  res.header('Token', encode({ login, password }))

  res.status(200).jsonp(req.query)
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

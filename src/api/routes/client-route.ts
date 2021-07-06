import * as express from 'express'
// import { Container } from 'typedi'

// const client = Container.get(ClientController)
const clients = express.Router()

clients.get('/', (req, res) => {
  return res.status(200).end()
})

export { clients }

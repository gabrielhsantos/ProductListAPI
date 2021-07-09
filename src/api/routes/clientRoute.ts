import * as express from 'express'
import { authMiddleware } from '@api/middlewares/auth'
import { ClientController } from '../controllers/client/clientController'
import { ClientProductListController } from '../controllers/clientProductList/clientProductListController'

const client = new ClientController()
const clientList = new ClientProductListController()
const clients = express.Router()

// Client
clients.post('/', authMiddleware, client.saveClient)
clients.get('/', authMiddleware, client.clientsList)
clients.get('/:clientId', authMiddleware, client.findClient)
clients.patch('/:clientId', authMiddleware, client.updateClient)
clients.delete('/:clientId', authMiddleware, client.removeClient)

// List
clients.post('/:clientId/list', authMiddleware, clientList.addProduct)
clients.get('/:clientId/list', authMiddleware, clientList.getClientList)
clients.delete('/:clientId/list/:productId', authMiddleware, clientList.removeProduct)

export { clients }

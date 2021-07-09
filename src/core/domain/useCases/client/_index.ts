import { Client } from '@domain/repositories/clients/clientsRepository'
import { CreateClientUseCase } from './createClientUseCase'
import { ClientService } from '@services/clients'
import { FindClientUseCase } from './findClientUseCase'
import { RemoveClientUseCase } from './removeClientUseCase'
import { UpdateClientUseCase } from './updateClientUseCase'

const clientsRepository = new Client()

const createClientUseCase = new CreateClientUseCase(clientsRepository)
const createClient = new ClientService(createClientUseCase)

const findClientUseCase = new FindClientUseCase(clientsRepository)
const findClient = new ClientService(findClientUseCase)

const removeClientUseCase = new RemoveClientUseCase(clientsRepository)
const removeClient = new ClientService(removeClientUseCase)

const updateClientUseCase = new UpdateClientUseCase(clientsRepository)
const updateClient = new ClientService(updateClientUseCase)

export { createClient, findClient, removeClient, updateClient }

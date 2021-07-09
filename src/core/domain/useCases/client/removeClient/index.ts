import { Client } from '@domain/repositories/clients/clientsRepository'
import { RemoveClientUseCase } from './removeClientUseCase'
import { ClientService } from '@services/clients'

const clientsRepository = new Client()
const removeClientUseCase = new RemoveClientUseCase(clientsRepository)
const removeClientService = new ClientService(removeClientUseCase)

export { removeClientService }

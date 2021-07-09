import { Client } from '@domain/repositories/clients/clientsRepository'
import { CreateClientUseCase } from './createClientUseCase'
import { ClientService } from '@services/clients'

const clientsRepository = new Client()
const createClientUseCase = new CreateClientUseCase(clientsRepository)
const createClientService = new ClientService(createClientUseCase)

export { createClientService }

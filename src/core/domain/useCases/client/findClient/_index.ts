import { Client } from '@domain/repositories/clients/clientsRepository'
import { FindClientUseCase } from './findClientUseCase'
import { ClientService } from '@services/clients'

const clientsRepository = new Client()
const findClientUseCase = new FindClientUseCase(clientsRepository)
const findClientService = new ClientService(findClientUseCase)

export { findClientService }

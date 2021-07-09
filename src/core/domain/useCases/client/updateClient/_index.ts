import { Client } from '@domain/repositories/clients/clientsRepository'
import { UpdateClientUseCase } from './updateClientUseCase'
import { ClientService } from '@services/clients'

const clientsRepository = new Client()
const updateClientUseCase = new UpdateClientUseCase(clientsRepository)
const updateClientService = new ClientService(updateClientUseCase)

export { updateClientService }

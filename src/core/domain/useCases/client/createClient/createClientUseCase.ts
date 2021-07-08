import { Client } from '../../../entities/clients'
import { IClientsRepository } from '../../../repositories/clients/IClientsRepository'
import { ICreateClientInput } from './createClientInput'
import { StatusCodes } from 'http-status-codes'

export class CreateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async saveClient(data: ICreateClientInput) {
    const clientAlreadyExists = await this.findClientByFilter({ email: data.email })

    if (clientAlreadyExists)
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'Client already exists.',
      }

    await this.clientsRepository.saveClient(new Client(data))
  }

  async findClient(id: string): Promise<Client> {
    const client = await this.findClientByFilter({ uuid: id })

    if (!client)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    return client
  }

  async clientsList(email?: string): Promise<Client[]> {
    const filter = email ? { email } : {}

    const clients = await this.clientsRepository.clientsList(filter)

    return clients
  }

  async findClientByFilter(filter: object): Promise<Client | null> {
    return await this.clientsRepository.findClient(filter)
  }
}

import { StatusCodes } from 'http-status-codes'
import { Client } from '@entities/clients'
import { IClientsRepository } from '@domain/repositories/clients/IClientsRepository'
import { IClientsUseCase } from '../_interfaces/IClientsUseCases'

export class FindClientUseCase implements IClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async clientsList(email?: string): Promise<Client[]> {
    let filter: any = { active: true }
    !email || (filter.email = email)

    const clients = await this.clientsRepository.clientsList(filter)

    return clients
  }

  async findClient(id: string): Promise<Client> {
    const client = await this.findClientByFilter({ uuid: id, active: true })

    if (!client)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    return client
  }

  async findClientByFilter(filter: object): Promise<Client | null> {
    return await this.clientsRepository.findClient(filter)
  }
}

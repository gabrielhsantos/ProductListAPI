import { Client } from '../../../entities/clients'
import { IClientsRepository } from '../../../repositories/clients/IClientsRepository'
import { ICreateClientInput } from '../interfaces/ICreateClientInput'
import { StatusCodes } from 'http-status-codes'
import { IClientsUseCase } from '../interfaces/IClientsUseCases'

export class CreateClientUseCase implements IClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async saveClient(client: ICreateClientInput): Promise<void> {
    const clientAlreadyExists = await this.clientsRepository.findClient({ email: client.email })

    if (clientAlreadyExists)
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'Client already exists.',
      }

    await this.clientsRepository.saveClient!(new Client(client))
  }
}

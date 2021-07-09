import { StatusCodes } from 'http-status-codes'
import { IClientsRepository } from '@domain/repositories/clients/IClientsRepository'
import { IClientsUseCase } from './_interfaces/IClientsUseCases'
import { IUpdateClientInput } from './_interfaces/IClientInputs'

export class UpdateClientUseCase implements IClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async updateClient(id: string, updateClient: IUpdateClientInput): Promise<void> {
    const client = await this.clientsRepository.findClient({ uuid: id, active: true })

    if (!client)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    await this.clientsRepository.updateClient({ uuid: id }, { ...updateClient, updatedAt: new Date() })
  }
}

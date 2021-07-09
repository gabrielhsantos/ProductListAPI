import { StatusCodes } from 'http-status-codes'
import { IClientsRepository } from '@domain/repositories/clients/IClientsRepository'
import { IClientsUseCase } from './_interfaces/IClientsUseCases'

export class RemoveClientUseCase implements IClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async removeClient(id: string): Promise<void> {
    const client = await this.clientsRepository.findClient({ uuid: id, active: true })

    if (!client)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    await this.clientsRepository.removeClient({ uuid: id }, { active: false, updatedAt: new Date() })
  }
}

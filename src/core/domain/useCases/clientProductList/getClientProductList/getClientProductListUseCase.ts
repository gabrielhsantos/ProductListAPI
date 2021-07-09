import { StatusCodes } from 'http-status-codes'
import { IClientsListsProductsUseCase } from '../_interfaces/IClientsProductsListsUseCases'
import { Client } from '@core/domain/entities/clients'
import { IClientsRepository } from '@core/domain/repositories/clients/IClientsRepository'

export class GetClientProductListUseCase implements IClientsListsProductsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async getClient(clientId: string): Promise<Client> {
    const clientList = await this.clientsRepository.findClientList({ uuid: clientId, active: true })

    if (!clientList)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    return clientList
  }
}

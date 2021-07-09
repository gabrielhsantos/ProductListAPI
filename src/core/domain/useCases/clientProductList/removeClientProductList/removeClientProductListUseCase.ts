import ClientProductList from '@domain/entities/clientsProductsLists'
import { Op } from 'sequelize'
import { IClientsProductsListsRepository } from '@domain/repositories/clientsProductsLists/IClientsProductsListsRepository'
import { StatusCodes } from 'http-status-codes'
import { IClientsListsProductsUseCase } from '../_interfaces/IClientsProductsListsUseCases'
import { IProductInput } from '../_interfaces/IClientProductListInputs'
import { Client } from '@core/domain/entities/clients'

export class RemoveClientProductListUseCase implements IClientsListsProductsUseCase {
  constructor(private clientsProductsListsRepository: IClientsProductsListsRepository) {}

  async removeProduct(data: IProductInput): Promise<void> {
    const client = await this.getClient(data.clientId)
    const product: ClientProductList = await this.getProduct(data.productId, client.id)

    await this.clientsProductsListsRepository.removeProduct(
      { uuid: product.uuid },
      { active: false, updatedAt: new Date() },
    )
  }

  async getClient(clientId: string): Promise<Client> {
    const client = await new Client().findClient({ uuid: clientId, active: true })

    if (!client)
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Client not found.',
      }

    return client
  }

  async getProduct(productId: string, clientId: number): Promise<ClientProductList> {
    const filter = {
      [Op.or]: [{ uuid: { [Op.like]: productId } }, { externalProductId: { [Op.like]: productId } }],
      clientId: clientId,
      active: true,
    }

    const product = await this.clientsProductsListsRepository.getOneProduct(filter)

    if (!product)
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'Product not found.',
      }

    return product
  }
}

import ClientProductList from '@domain/entities/clientsProductsLists'
import { GetProviderProductUseCase } from '@domain/useCases/clientProductList/getProviderProduct/getProviderProductUseCase'
import { IClientsProductsListsRepository } from '@domain/repositories/clientsProductsLists/IClientsProductsListsRepository'
import { StatusCodes } from 'http-status-codes'
import { IClientsListsProductsUseCase } from '../_interfaces/IClientsProductsListsUseCases'
import { IProductInput } from '../_interfaces/IClientProductListInputs'
import { IProviderProductResponse } from '@providers/luizaLabs/IProviderProductResponse'
import { Client } from '@core/domain/entities/clients'

export class AddClientProductListUseCase implements IClientsListsProductsUseCase {
  constructor(private clientsProductsListsRepository: IClientsProductsListsRepository) {}

  async addProduct(data: IProductInput): Promise<void> {
    const product: IProviderProductResponse = await this.getProviderProduct(data.productId)
    const client: Client = await this.getClient(data.clientId)

    await this.validateClientListProduct(product.id, client.id)

    const addProduct = {
      clientId: client.id,
      externalProductId: product.id,
      title: product.title,
      brand: product.brand,
      imageUrl: product.image,
      price: product.price,
    }

    await this.clientsProductsListsRepository.addProduct(new ClientProductList(addProduct))
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

  async getProviderProduct(productId: string): Promise<IProviderProductResponse> {
    try {
      const getProviderProduct = await new GetProviderProductUseCase().getProviderProduct(productId)

      return getProviderProduct
    } catch (error) {
      throw {
        statusCode: StatusCodes.NOT_FOUND,
        errors: 'Product not found.',
      }
    }
  }

  async validateClientListProduct(productId: string, clientId: number): Promise<void> {
    const filter = { externalProductId: productId, clientId }

    const productAlreadyInList = await this.clientsProductsListsRepository.getOneProduct(filter)

    if (productAlreadyInList)
      throw {
        statusCode: StatusCodes.BAD_REQUEST,
        errors: 'Product already in list.',
      }
  }
}

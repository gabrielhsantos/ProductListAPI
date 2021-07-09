import { Client } from '@core/domain/entities/clients'
import { IProductInput } from '@core/domain/useCases/clientProductList/_interfaces/IClientProductListInputs'
import { IClientsListsProductsUseCase } from '@core/domain/useCases/clientProductList/_interfaces/IClientsProductsListsUseCases'

export class ClientProductListService {
  constructor(private clientProductListUseCase: IClientsListsProductsUseCase) {}

  async addProduct(params: IProductInput): Promise<void> {
    await this.clientProductListUseCase.addProduct!(params)
  }

  async getClientList(clientId: string): Promise<Client> {
    return await this.clientProductListUseCase.getClient!(clientId)
  }

  async removeProduct(params: IProductInput): Promise<void> {
    await this.clientProductListUseCase.removeProduct!(params)
  }
}

import ClientProductList from '@core/domain/entities/clientsProductsLists'
import { Client } from '@core/domain/entities/clients'
import { IProviderProductResponse } from '@providers/luizaLabs/IProviderProductResponse'
import { IProductInput } from './IClientProductListInputs'

export interface IClientsListsProductsUseCase {
  addProduct?(data: IProductInput): Promise<void>
  getClient?(clientId: string): Promise<Client>
  getClientList?(clientId: string): Promise<ClientProductList | null>
  getProduct?(productId: string, clientId: number): Promise<ClientProductList>
  removeProduct?(data: IProductInput): Promise<void>
  getProviderProduct?(productId: string): Promise<IProviderProductResponse>
  validateClientListProduct?(productId: string, clientId: number): Promise<void>
}

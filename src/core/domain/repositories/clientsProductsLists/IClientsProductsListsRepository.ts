import ClientProductList from '@core/domain/entities/clientsProductsLists'
import { IClientProductListDTO } from '@core/domain/useCases/clientProductList/_interfaces/IClientProductListDTO'

export interface IClientsProductsListsRepository extends IClientProductListDTO {
  addProduct(data: ClientProductList): Promise<void>
  getOneProduct(filter: object): Promise<ClientProductList | null>
  removeProduct(filter: object, updateProduct: object): Promise<void>
}

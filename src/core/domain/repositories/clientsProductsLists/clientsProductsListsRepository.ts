import { Model } from 'sequelize'
import { IClientsProductsListsRepository } from './IClientsProductsListsRepository'

class ClientProductList extends Model implements IClientsProductsListsRepository {
  async addProduct(product: any): Promise<void> {}

  async getProductsList(email: string): Promise<any[]> {
    return []
  }

  async getOneProduct(productId: string): Promise<any> {}

  async removeProduct(productId: string): Promise<void> {}
}

export default ClientProductList

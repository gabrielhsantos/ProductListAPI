import { Model } from 'sequelize'
import { IClientsProductsListsRepository } from './IClientsProductsListsRepository'

class ClientProductList extends Model implements IClientsProductsListsRepository {
  public id: number
  public uuid: string
  public clientId: number
  public externalProductId: string
  public title: string
  public brand: string
  public imageUrl: string
  public price: number
  public active: boolean
  public createdAt: Date
  public updateAt?: Date

  async addProduct(product: ClientProductList): Promise<void> {
    ClientProductList.create(product.toJSON())
  }

  async getOneProduct(filter: object): Promise<ClientProductList | null> {
    return ClientProductList.findOne({ where: filter })
  }

  async removeProduct(filter: object, updateProduct: object): Promise<void> {
    ClientProductList.update(updateProduct, { where: filter })
  }
}

export { ClientProductList }

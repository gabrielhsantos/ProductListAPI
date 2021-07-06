import { Model } from 'sequelize'
import { IClientsRepository } from './IClientsRepository'

class Client extends Model implements IClientsRepository {
  async saveClient(user: any): Promise<void> {}

  async findClient(email: string): Promise<any> {
    return 'Client'
  }

  async updateClient(email: string): Promise<void> {}

  async removeClient(email: string): Promise<void> {}
}

export default Client

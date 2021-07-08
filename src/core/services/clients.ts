import { Client } from '@core/domain/entities/clients'
import { ICreateClientInput } from '@core/domain/useCases/client/createClient/createClientInput'
import { CreateClientUseCase } from '@core/domain/useCases/client/createClient/createClientUseCase'

export class ClientService {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async saveClient(params: ICreateClientInput): Promise<void> {
    await this.createClientUseCase.saveClient({ ...params })
  }

  async clientsList(email?: string): Promise<Client[]> {
    return await this.createClientUseCase.clientsList(email)
  }

  async findClient(id: string): Promise<Client> {
    return await this.createClientUseCase.findClient(id)
  }

  async updateClient(id: string): Promise<void> {
    await this.createClientUseCase.findClient(id)
  }
}

import { Client } from '@core/domain/entities/clients'
import { ICreateClientInput, IUpdateClientInput } from '@core/domain/useCases/client/_interfaces/IClientInputs'
import { IClientsUseCase } from '@core/domain/useCases/client/_interfaces/IClientsUseCases'

export class ClientService {
  constructor(private clientUseCase: IClientsUseCase) {}

  async saveClient(client: ICreateClientInput): Promise<void> {
    await this.clientUseCase.saveClient!({ ...client })
  }

  async clientsList(email?: string): Promise<Client[]> {
    return await this.clientUseCase.clientsList!(email)
  }

  async findClient(id: string): Promise<Client> {
    return await this.clientUseCase.findClient!(id)
  }

  async updateClient(id: string, client: IUpdateClientInput): Promise<void> {
    await this.clientUseCase.updateClient!(id, client)
  }

  async removeClient(id: string): Promise<void> {
    await this.clientUseCase.removeClient!(id)
  }
}

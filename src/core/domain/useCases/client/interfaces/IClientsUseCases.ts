import { Client } from '@core/domain/entities/clients'
import { ICreateClientInput } from './ICreateClientInput'
import { IUpdateClientInput } from './IUpdateClientInput'

export interface IClientsUseCase {
  saveClient?(data: ICreateClientInput): Promise<void>
  clientsList?(email?: string): Promise<Client[]>
  findClient?(id: string): Promise<Client>
  updateClient?(id: string, updateClient: IUpdateClientInput): Promise<void>
  removeClient?(id: string): Promise<void>
  findClientByFilter?(filter: object): Promise<Client | null>
}

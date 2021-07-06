export interface IClientsRepository {
  saveClient(user: any): Promise<void>
  findClient(email: string): Promise<any>
  updateClient(email: string): Promise<void>
  removeClient(email: string): Promise<void>
}

export interface IClientsProductsListsRepository {
  addProduct(product: any): Promise<void>
  getProductsList(email: string): Promise<any[]>
  getOneProduct(productId: string): Promise<any>
  removeProduct(productId: string): Promise<void>
}

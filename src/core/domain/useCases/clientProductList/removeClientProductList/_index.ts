import { ClientProductList } from '@domain/repositories/clientsProductsLists/clientsProductsListsRepository'
import { RemoveClientProductListUseCase } from './removeClientProductListUseCase'
import { ClientProductListService } from '@services/clientsProductsLists'

const clientsProductsListsRepository = new ClientProductList()
const removeClientProductListUseCase = new RemoveClientProductListUseCase(clientsProductsListsRepository)
const removeClientProductListService = new ClientProductListService(removeClientProductListUseCase)

export { removeClientProductListService }

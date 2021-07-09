import { ClientProductList } from '@domain/repositories/clientsProductsLists/clientsProductsListsRepository'
import { AddClientProductListUseCase } from './addClientProductListUseCase'
import { ClientProductListService } from '@services/clientsProductsLists'

const clientsProductsListsRepository = new ClientProductList()
const addClientProductListUseCase = new AddClientProductListUseCase(clientsProductsListsRepository)
const addClientProductListService = new ClientProductListService(addClientProductListUseCase)

export { addClientProductListService }

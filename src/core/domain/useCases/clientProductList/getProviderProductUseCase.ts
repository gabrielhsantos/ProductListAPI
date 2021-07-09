import { GetProviderProducts } from '@providers/luizaLabs/getProducts'
import { IClientsListsProductsUseCase } from './_interfaces/IClientsProductsListsUseCases'
import { IProviderProductResponse } from '@providers/luizaLabs/IProviderProductResponse'

export class GetProviderProductUseCase implements IClientsListsProductsUseCase {
  async getProviderProduct(productId: string): Promise<IProviderProductResponse> {
    const getProviderProduct = await new GetProviderProducts().getProductById(productId)

    return getProviderProduct
  }
}

import { Requester } from '@config/_index'
import { env } from '@env/envConfig'
import { IProviderProductResponse } from './IProviderProductResponse'
import { AxiosResponse } from 'axios'

class GetProviderProducts {
  private luizaLabsBaseUrl = env.providers.luizaLabs

  async getProductById(productId: string): Promise<IProviderProductResponse> {
    const getProviderProducts: AxiosResponse = await new Requester().get(
      this.luizaLabsBaseUrl,
      `/product/${productId}/`,
    )

    const getProducts: IProviderProductResponse = getProviderProducts.data

    return getProducts
  }
}

export { GetProviderProducts }

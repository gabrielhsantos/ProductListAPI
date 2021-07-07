import { Inject } from 'typedi'
import { Requester } from '@config/index'
import { env } from '@env/envConfig'

class GetProducts {
  @Inject() private requester: Requester
  private luizaLabsBaseUrl = env.providers.luizaLabs

  async productsList() {
    const getProducts = await this.requester.get(this.luizaLabsBaseUrl, '/products/')

    return getProducts
  }
}

export { GetProducts }

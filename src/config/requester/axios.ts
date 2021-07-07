import axios from 'axios'
import { IRequester } from '@config/interfaces/IRequesters'
import { logger } from '@config/index'

class Requester {
  async get(params: IRequester, resource: string) {
    try {
      const request = axios.create(params)

      const response = await request.get(resource)
      return response
    } catch (error) {
      logger.error(error)
      throw error
    }
  }
}

export { Requester }

import 'reflect-metadata'
import axios from 'axios'
import { IRequester } from '@config/_interfaces/IRequesters'

class Requester {
  async get(params: IRequester, resource: string) {
    const request = axios.create(params)

    const response = await request.get(resource)
    return response
  }
}

export { Requester }

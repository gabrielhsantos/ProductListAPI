import { IRequester } from './IRequesters'

export interface IEnv {
  api: {
    name: string
    port: number
  }
  database: {
    database: string
    host: string
    port: number
    username: string
    password: string
    dialect: string
    logging: boolean
    timezone: string
    schema: string
  }
  docs: {
    swagger: {
      schemes: string
      host: string
      server: string
    }
  }
  providers: {
    luizaLabs: IRequester
  }
  jwt: {
    secret: string
  }
}

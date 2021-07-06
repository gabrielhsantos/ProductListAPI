export interface IEnv {
  api: {
    name: string
    port: number
  }
  database: {
    postgres: {
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
  }
  docs: {
    swagger: {
      schemes: string
      host: string
      server: string
    }
  }
}

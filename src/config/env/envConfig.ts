import { IEnv } from '../interfaces/IEnv'

const env: IEnv = {
  api: {
    name: (process.env.API_NAME as string) || 'ProductListAPI',
    port: parseInt((process.env.API_PORT as string) || '3001'),
  },
  database: {
    database: process.env.DB as string,
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string) || 5432,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    dialect: process.env.DB_DIALECT as string,
    logging: process.env.DB_LOGGING === 'true',
    timezone: (process.env.DB_TIMEZONE as string) || 'UTC',
    schema: process.env.DB_SCHEMA as string,
  },
  docs: {
    swagger: {
      schemes: process.env.SWAGGER_SCHEMES as string,
      host: process.env.SWAGGER_HOST as string,
      server: process.env.SWAGGER_SERVER as string,
    },
  },
  providers: {
    luizaLabs: {
      baseURL: process.env.LUIZA_LABS_URL as string,
      timeout: parseInt(process.env.TIMEOUT as string) || 10000,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
}

export { env }

import { IEnv } from '../interfaces/envInterface'

const env: IEnv = {
  api: {
    name: (process.env.API_NAME as string) || 'ProductListAPI',
    port: parseInt((process.env.API_PORT as string) || '3001'),
  },
  database: {
    postgres: {
      database: process.env.POSTGRES_DB as string,
      host: process.env.POSTGRES_DB_HOST as string,
      port: parseInt(process.env.POSTGRES_DB_PORT as string) || 5432,
      username: process.env.POSTGRES_DB_USER as string,
      password: process.env.POSTGRES_DB_PASSWORD as string,
      dialect: process.env.POSTGRES_DB_DIALECT as string,
      logging: process.env.POSTGRES_DB_LOGGING === 'true',
      timezone: (process.env.POSTGRES_DB_TIMEZONE as string) || 'UTC',
      schema: process.env.POSTGRES_DB_SCHEMA as string,
    },
  },
  docs: {
    swagger: {
      schemes: process.env.SWAGGER_SCHEMES as string,
      host: process.env.SWAGGER_HOST as string,
      server: process.env.SWAGGER_SERVER as string,
    },
  },
}

export { env }

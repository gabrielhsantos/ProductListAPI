import { Sequelize } from 'sequelize'
import { Service } from 'typedi'
import { env, logger } from '@config/index'

@Service()
class databaseConnection {
  private connection: Sequelize

  constructor() {
    if (!this.connection) {
      const postgres = env.database.postgres

      this.connection = new Sequelize({
        database: postgres.database,
        username: postgres.username,
        password: postgres.password,
        host: postgres.host,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
        logging: postgres.logging,
        timezone: postgres.timezone,
      })
    }
  }

  get Connection(): Sequelize {
    return this.connection
  }

  async connectDatabase() {
    await this.connection.authenticate().then(e => {
      logger.info('Database connected!')
    })
  }
}

export { databaseConnection }

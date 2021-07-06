require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
})

module.exports = {
  sequelize: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_PASSWORD,
    dialect: process.env.POSTGRES_DB_DIALECT,
    logging: process.env.POSTGRES_DB_LOGGING === 'true',
    storage: './__tests__/database.sqlite'
  }
}
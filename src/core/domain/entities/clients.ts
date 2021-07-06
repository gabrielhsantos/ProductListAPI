import Client from '../repositories/clients/clientsRepository'
import { DataTypes } from 'sequelize'
import { Container } from 'typedi'
import { env } from '@env/envConfig'
import { databaseConnection } from '@config/database/sequelizeConfig'

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    schema: env.database.postgres.schema,
    tableName: 'clients',
    sequelize: Container.get(databaseConnection).Connection,
    modelName: 'client',
  },
)

export default Client
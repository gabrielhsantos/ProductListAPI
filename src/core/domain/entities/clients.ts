import { Client } from '../repositories/clients/clientsRepository'
import { DataTypes } from 'sequelize'
import { Container } from 'typedi'
import { env } from '@env/envConfig'
import { databaseConnection } from '@config/database/sequelizeConfig'
import { v4 as uuidv4 } from 'uuid'

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
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
    schema: env.database.schema,
    tableName: 'clients',
    sequelize: Container.get(databaseConnection).Connection,
    modelName: 'client',
  },
)

export { Client }

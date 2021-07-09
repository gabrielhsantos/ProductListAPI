import { ClientProductList } from '@domain/repositories/clientsProductsLists/clientsProductsListsRepository'
import { Client } from '@entities/clients'
import { DataTypes } from 'sequelize'
import { Container } from 'typedi'
import { env } from '@env/envConfig'
import { databaseConnection } from '@config/database/sequelizeConfig'
import { v4 as uuidv4 } from 'uuid'

ClientProductList.init(
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
    clientId: {
      type: DataTypes.INTEGER,
    },
    externalProductId: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
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
    tableName: 'clients_products_lists',
    sequelize: Container.get(databaseConnection).Connection,
    modelName: 'clientProductList',
  },
)

Client.hasMany(ClientProductList, { foreignKey: 'client_id' })

export default ClientProductList

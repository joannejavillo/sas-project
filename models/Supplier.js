const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Supplier extends Model {}

Supplier.init(
  {
     // define columns
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      supplier_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.INTEGER, STRING,
        allowNull: false,
        validate: true,
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '10',
        validate: true,
      },

      email: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        defaultValue: '10',
        validate: true,
      },

      category_id: {
         type: DataTypes.INTEGER,
         references: {
         model: 'category',
         key: 'id',
        },
      }, 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'supplier',
    }
  );
  
  module.exports = Supplier;
  
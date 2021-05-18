const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Supplier extends Model { }

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
      type: DataTypes.STRING,
      allowNull: false,
      validate: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: true,
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

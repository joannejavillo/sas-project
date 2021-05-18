//import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

//initialize drug model (table) by extending off Sequelize's Model class

class Drug extends Model { }

// set up fields and rules for Drug model
Drug.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      drug_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strength: {
        type: DataTypes.STRING, 
        validate: true,
      },
      classification: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: true,
      },

      storage: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: true,
      },
      supplier_id: {
         type: DataTypes.INTEGER,
         references: {
         model: 'supplier',
         key: 'id',
        },
      }, 
    },

    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'drug',
    }
  );
  
  module.exports = Drug;
  
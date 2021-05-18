//import important parts of sequelize library
const { Model, Datatypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

//initialize drug model (table) by extending off Sequelize's Model class

class Drug extends Model {}

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
        type: DataTypes.STRING, INTEGER, 
        validate: true,
      },
      classification: {
        type: DataTypes.STRING, INTEGER,
        allowNull: false,
        validate: true,
      },

      storage: {
          type: Datatypes.STRING,
          allowNull: false,
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
      modelName: 'drug',
    }
  );
  
  module.exports = Drug;
  
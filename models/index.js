// import models
const Drug = require('./Drug');
const Supplier = require('./Supplier');
const User = require ('./User');

// Drug belongsTo Supplier
Drug.belongsTo(Supplier, {
  foreignKey: 'supplier_id',
  onDelete: 'CASCADE',
});

// Supplier has many Drugs
Supplier.hasMany(Drug, {
  foreignKey: 'supplier_id',
  onDelete: 'CASCADE',
});



module.exports = {
  Drug,
  Supplier,
  User,
};

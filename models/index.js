// import models
const Drug = require('./Drug');
const Supplier = require('./Supplier');

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

// // Drugs belongToMany Supplier (through ProductTag)
// Prod.belongsToMany(Tag, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
  
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag,
//     unique: false
//   },
  
// });

module.exports = {
  Drug,
  //Category,
  Supplier,
  //ProductTag,
};

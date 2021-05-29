const seedDrug = require('./drug-seeds');
const seedSupplier = require('./supplier-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedSupplier();
  console.log('\n----- SUPPLIER SEEDED -----\n');
  await seedDrug();
  console.log('\n----- DRUG SEEDED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  process.exit(0);
};

seedAll();

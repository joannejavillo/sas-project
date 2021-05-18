const { Supplier } = require('../models');

const supplierData = [
  {
    supplier_name: 'Link Pharmaceuticals',
    address: 'PO Box 135 Avalon Beach NSW 2107',
    contact: 1800181060,
    email: 'customerservice@linkpharma.com.au',
    category_id: 1,
  },
  {
    supplier_name: 'Medsurge Healthcare Pty Ltd',
    address: 'Suite 13 Level 4 150 Albert Road South Melbourne Vic 3205',
    contact: 1300788261,
    email: 'sales@medsurge.com.au',
    category_id: 2,
  },
  {
    supplier_name: 'Symbion Pharmacy Services Pty Ltd',
    address: 'GPO Box 1618 Adelaide SA 5001',
    contact: 1300773000,
    email: 'sas@symbion.com.au',
    category_id: 3,
  },
  {
    supplier_name: 'Pro Pharmaceuticals Group Pty Ltd',
    address: 'PO box 1016 North Hampton Vic 3188',
    contact: 1300788261,
    email: 'orders@propg.com.au',
    category_id: 4,
  },
  {
    supplier_name: 'Medsurge Healthcare Pty Ltd',
    address: 'Suite 13 Level 4 150 Albert Road South Melbourne Vic 3205',
    contact: 1300788261,
    email: 'sales@medsurge.com.au',
    category_id: 2,
  },
  {
    supplier_name: 'Link Pharmaceuticals',
    address: 'PO Box 135 Avalon Beach NSW 2107',
    contact: 1800181060,
    email: 'customerservice@linkpharma.com.au',
    category_id: 1,
  },
  {
    supplier_name: 'Globalrx USA',
    address: 'Suite 17A 437 Dimmocks Mill Rd Hillsborough NC 272278 USA',
    contact: 9192458418,
    email: 'na',
    category_id: 7,
    },
];

const seedSupplier = () => Supplier.bulkCreate(supplierData);

module.exports = seedSupplier;
const { Drug } = require('../models');

const drugData = [
    {
        drug_name: 'Argatroban (Exembol) Injection',
        strength: '250 mg / 2.5 mL',
        classification: 'SAS',
        storage: 'Room Temperature',
        supplier_id: 1,
    },
    {
        drug_name: 'Fondaparinux Sodium (Arixtra) Injection',
        strength: '7.5 mg / 0.6 mL',
        classification: 'SAS',
        storage: 'Room Temperature',
        supplier_id: 2,
    },
    {
        drug_name: 'Indocyanin Green (Infracyanin) Injection',
        strength: '25 mg / 10 Ml',
        classification: 'S19',
        storage: 'Room Temperature',
        supplier_id: 3,
    },
    {
        drug_name: 'Levosimendan (Simdax) Injection',
        strength: '12.5 mg / 5 mL',
        classification: 'SAS',
        storage: 'Fridge Line',
        supplier_id: 4,
    },
    {
        drug_name: 'Furosemide (Furorese) Tablet',
        strength: '500 mg',
        classification: 'S19',
        storage: 'Room Temperature',
        supplier_id: 2,
    },
    {
        drug_name: 'Tizanidine (Apotex) Tablet',
        strength: '4 mg',
        classification: 'SAS',
        storage: 'Room Temperature',
        supplier_id: 1,
    },
    {
        drug_name: 'Trimethoprim-Sulfamethoxazole (Somerset) Injection',
        strength: '160 mg - 800 mg / 10 mL',
        classification: 'SAS',
        storage: 'Room Temperature',
        supplier_id: 5,
    },
    {
        drug_name: 'Aspirin Bayer Injection',
        strength: '500mg',
        classification: 'SAS',
        storage: 'Room Temperature',
        supplier_id: 1,
    },
];

const seedDrug = () => Drug.bulkCreate(drugData);

module.exports = seedDrug;
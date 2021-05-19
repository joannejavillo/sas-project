const router = require('express').Router();
const { Drug, Supplier } = require('../../models');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products

  router.get('/', async (req, res) => {  
  try {
    const supplierData = await Supplier.findAll({
      include: [{ model: Drug }],
    });
    res.status(200).json(supplierData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
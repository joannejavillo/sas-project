const router = require('express').Router();
const { Drug, Supplier } = require('../../models');

// The `/api/categories` endpoint
// find all supplier
  // be sure to include its associated drugs

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

// create a new supplier
router.post('/', async (req, res) => {
  try {
    const supplierData = await Supplier.create(req.body);
    res.status(200).json(supplierData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
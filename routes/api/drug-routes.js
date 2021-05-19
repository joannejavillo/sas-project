const router = require('express').Router();
const { Supplier, Drug } = require('../../models');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products

  router.get('/', async (req, res) => {  
  try {
    const drugData = await Drug.findAll({
      include: [{ model: Supplier }],
    });
    res.status(200).json(drugData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Supplier, Drug } = require('../../models');

// The `/api/categories` endpoint
// find all drugs
  // be sure to include its associated suppliers

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

  // create a new drug
  router.post('/', async (req, res) => {
    try {
      const drugData = await Drug.create(req.body);
      res.status(200).json(drugData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
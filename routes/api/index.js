const router = require('express').Router();
const drugRoutes = require('./drug-routes');
const supplierRoutes = require('./supplier-routes');
//const tagRoutes = require('./tag-routes');

router.use('/drug', drugRoutes);
router.use('/supplier', supplierRoutes);
////router.use('/tags', tagRoutes);

module.exports = router;
const router = require('express').Router();
const drugRoutes = require('./drug-routes');
const supplierRoutes = require('./supplier-routes');
const userRoutes = require('./userRoutes');

router.use('/drug', drugRoutes);
router.use('/supplier', supplierRoutes);
router.use('/users', userRoutes);

module.exports = router;
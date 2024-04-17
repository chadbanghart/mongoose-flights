const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All paths start with '/' (root)

// POST /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;
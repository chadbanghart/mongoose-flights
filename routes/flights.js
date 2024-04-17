const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights all flights (index action)
router.get('/', flightsCtrl.index);
// GET /flights/new (new action)
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show action)
router.get('/:id', flightsCtrl.show);
// PUT /flights/:id/ (update action)
router.get('/:id', flightsCtrl.update);
// POST /flights (create action)
router.post('/', flightsCtrl.create);


module.exports = router;

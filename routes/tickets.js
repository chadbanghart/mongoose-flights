const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All paths start with '/'

// GET flights/:id/tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST flights/:id/tickets (create functionality)
router.post('/flights/:id/tickets', ticketsCtrl.create);



module.exports = router;
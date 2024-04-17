const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
}

async function newTicket(req, res) {
  const tickets = await Ticket.find({});
  res.render('tickets/new', { flightId: req.params.id, tickets });
}

async function create(req, res) {
  // Add the flight prop to req.body
  // before calling Ticket.create(req.body)
  req.body.flight = req.params.id;
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${req.params.id}`);
}
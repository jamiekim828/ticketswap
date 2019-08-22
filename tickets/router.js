const { Router } = require('express');
const auth = require('../auth/middleware');
const Events = require('../events/model');
const Tickets = require('./model');
const router = new Router();

// POST NEW TICKET
router.post('/events/:id/ticket', auth, (req, res, next) => {
  console.log('id', req.params.id, req.body);
  const id = req.params.id;
  Events.findByPk(id)
    .then(event => {
      if (!event) {
        return res.status(404).send('Event cannot be found');
      }
      Tickets.create(req.body)
        .then(ticket =>
          res.status(201).json({
            message: 'Ticket has created',
            ticket
          })
        )
        .catch(err => next(err));
    })

    .catch(err => {
      next(err);
    });
});

//how can i make the foreign key not null and working as events_id??

// GET ALL TICKETS OF SPECIFIC EVENT
router.get('/events/:id/ticket', (req, res, next) => {
  const id = req.params.id;
  console.log('id', id, req.params.id);

  Tickets.findAll({ where: { events_id: `${id}` } })
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err =>
      res.status(400).json({
        message: 'Some Error',
        error: err
      })
    );
});

// GET ONE TICKET
router.get('/events/:id/ticket/:ticketsId', (req, res, next) => {
  const id = req.params.id;
  const ticketsId = req.params.ticketsId;

  Events.findByPk(id)
    .then(event => {
      if (!event) {
        return res.status(404).send('Event cannot be found');
      }
      Tickets.findByPk(ticketsId)
        .then(ticket =>
          res.status(201).json({
            ticket
          })
        )
        .catch(err => next(err));
    })
    .catch(err =>
      res.status(400).json({
        message: 'Some Error',
        error: err
      })
    );
});

//DELETE TICKET
router.delete('/events/:id/ticket/:ticketsId', auth, (req, res, next) => {
  const id = req.params.id;
  const ticketsId = req.params.ticketsId;

  Events.findByPk(id)
    .then(event => {
      if (!event) {
        return res.status(404).send('Event cannot be found');
      }
      Tickets.findByPk(ticketsId)
        .then(ticket => ticket.destroy())
        .then(ticket => res.status(200).send({ message: 'Ticket has deleted' }))
        .catch(err => next(err));
    })
    .catch(err =>
      res.status(400).json({
        message: 'Some Error',
        error: err
      })
    );
});

module.exports = router;

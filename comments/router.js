const { Router } = require('express');
const auth = require('../auth/middleware');
const Comments = require('./model');
const Tickets = require('../tickets/model');
const Events = require('../events/model');
const router = new Router();

// POST COMMENT
router.post(
  '/events/:id/ticket/:ticketsId/comments',
  auth,
  (req, res, next) => {
    const id = req.params.id;
    const ticketsId = req.params.ticketsId;
    console.log('id', id, 'ticketsId', ticketsId);

    Events.findByPk(id)
      .then(event => {
        if (!event) {
          return res.status(400).send({ message: 'Event cannot be found' });
        }
        Tickets.findByPk(ticketsId)
          .then(ticket => {
            if (!ticket) {
              res.status(400).send({ message: 'Ticket does not exist' });
            }
            Comments.create({ ...req.body, ticketsId })
              .then(comment => res.status(200).json({ comment }))
              .catch(err => next(err));
          })
          .catch(err => next(err));
      })
      .catch(err => next(err));
  }
);

// GET ALL COMMENTS
router.get('/events/:id/ticket/:ticketsId/comments', (req, res, next) => {
  const id = req.params.id;
  const ticketsId = req.params.ticketsId;
  console.log('id', id, 'ticketsId', ticketsId);

  Events.findByPk(id)
    .then(event => {
      if (!event) {
        return res.status(400).send({ message: 'Event cannot be found' });
      }
      Tickets.findByPk(ticketsId)
        .then(ticket => {
          if (!ticket) {
            res.status(400).send({ message: 'Ticket does not exist' });
          }
          Comments.findAll()
            .then(comment => res.status(200).json({ comment }))
            .catch(err => next(err));
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

module.exports = router;

const { Router } = require('express');
const auth = require('../auth/middleware');
const Events = require('./model');
const Tickets = require('../tickets/model');
const { Op } = require('sequelize');

const router = new Router();

// POST NEW EVENT
router.post('/events', auth, (req, res, next) => {
  console.log('req.body', req.body);
  Events.create(req.body)
    .then(event => {
      console.log('req.body', req.body);
      return res.status(201).send({
        event
      });
    })
    .catch(err => {
      next(err);
    });
});

// GET ALL EVENTS
router.get('/events', (req, res, next) => {
  const limit = req.query.limit || 9;
  const offset = req.query.offset || 0;

  Events.findAll({
    where: { enddate: { [Op.gte]: new Date() } },
    limit,
    offset,
    order: [['startdate', 'ASC']]
  })

    .then(events => {
      res.json({
        events: events
      });
    })
    .catch(err =>
      res.status(400).json({
        message: 'cannot find events',
        error: err
      })
    );
});

// GET ONE EVENT
router.get('/events/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id', id);

  Events.findByPk(id)
    .then(event => {
      if (!event) {
        return res.status(404).send({
          message: 'Event does not exist'
        });
      } else {
        return res.send(event);
      }
    })
    .catch(err => next(err));
});

//DELETE EVENT
router.delete('/events/:id', function(req, res, next) {
  const id = req.params.id;

  Events.findByPk(id)
    .then(event => event.destroy())
    .then(event =>
      res.status(200).send({
        message: 'Event has deleted'
      })
    )
    .catch(err => next(err));
});

module.exports = router;

const { Router } = require('express');
const { toJWT } = require('./jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users = require('../users/model');
const auth = require('./middleware');

const router = new Router();

//LOGIN and get TOKEN
router.post('/login', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log('User try to login w:', email, password);

  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    });
  } else {
    Users.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: 'User with that email does not exist'
          });
        }
        if (bcrypt.compareSync(req.body.password, entity.password)) {
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: 'Password was incorrect'
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Something went wrong'
        });
      });
  }
});

router.get('/secret-endpoint', auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});

module.exports = router;

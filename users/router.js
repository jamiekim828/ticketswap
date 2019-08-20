const { Router } = require('express');
const Users = require('./model');
const bcrypt = require('bcrypt');
const router = new Router();

//SIGN UP
router.post('/users', function(req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  Users.create(user)
    .then(user =>
      res.status(201).json({
        message: 'New User Created',

        user: user
      })
    )
    .catch(err => next(err));
});

module.exports = router;

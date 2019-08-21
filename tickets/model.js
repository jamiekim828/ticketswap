const Sequelize = require('sequelize');
const sequelize = require('../db');
const Users = require('../users/model');
const Events = require('../events/model');
const Comments = require('../comments/model');

const Tickets = sequelize.define(
  'tickets',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      validate: { isURL: true },
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: 'tickets'
  }
);

Tickets.hasMany(Comments, { as: 'comments', foreignKey: 'tickets_id' });

module.exports = Tickets;

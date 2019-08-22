const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('../db');
const Users = require('../users/model');
const Tickets = require('../tickets/model');

const Events = sequelize.define(
  'events',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      validate: { isURL: true },
      allowNull: false
    },
    startdate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  },

  {
    // timestamps: false,
    tableName: 'events'
  }
);

Events.hasMany(Tickets, { as: 'tickets', foreignKey: 'eventsId' });

module.exports = Events;

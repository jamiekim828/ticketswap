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
  // {
  //   freezeTableName: true,
  //   getterMethods: {
  //     startdateRead() {
  //       const date = moment.unix(this.startdate).format('DD-MM-YYYY');
  //       return date;
  //     },
  //     enddateRead() {
  //       const date = moment.unix(this.enddate).format('DD-MM-YYYY');
  //       return date;
  //     }
  //   },
  //   setterMethods: {
  //     startdateWrite(dateStr) {
  //       const date = moment(dateStr)
  //         .tz('Europe/Paris')
  //         .format();
  //       const timestamp = moment(date).format('X');
  //       return timestamp;
  //     },
  //     enddateWrite(dateStr) {
  //       const date = moment(dateStr)
  //         .tz('Europe/Paris')
  //         .format();
  //       const timestamp = moment(date).format('X');
  //       return timestamp;
  //     }
  //   }
  // },
  {
    // timestamps: false,
    tableName: 'events'
  }
);

Events.hasMany(Tickets, { as: 'tickets', foreignKey: 'events_id' });

module.exports = Events;

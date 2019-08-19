const Sequelize = require('sequelize');
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
      type: Sequelize.DATE,
      allowNull: false
    },
    enddate: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    getterMethods: {
      startdateRead() {
        var date = new Date(this.startdate);
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        return month + '/' + day + '/' + year;
      },
      enddateRead() {
        var date = new Date(this.enddate);
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        return month + '/' + day + '/' + year;
      }
    }
  },
  {
    timestamps: false,
    tableName: 'events'
  }
);

module.exports = Events;

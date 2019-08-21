const Sequelize = require('sequelize');
const sequelize = require('../db');
const Tickets = require('../tickets/model');

const Comments = sequelize.define(
  'comments',
  {
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'comments'
  }
);

module.exports = Comments;

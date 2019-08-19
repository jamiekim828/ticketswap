// const Sequelize = require('sequelize');
// const sequelize = require('../db');
// const Users = require('../users/model');
// const Events = require('../events/model');

// const Tickets = sequelize.define(
//   'tickets',
//   {
//     title: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     picture: {
//       type: Sequelize.STRING,
//       validate: { isURL: true },
//       allowNull: false
//     },
//     price: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     description: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     timestamps: true,
//     tableName: 'tickets'
//   }
// );

// Tickets.belongsTo(Users, { foreignKey: 'users_id' });
// Tickets.belongsTo(Events, { foreignKey: 'events_id' });

// module.exports = Tickets;

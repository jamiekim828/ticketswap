const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require('./db');
const cors = require('cors');

const users = require('./users/model');
const events = require('./events/model');
const tickets = require('./tickets/model');

const usersRouter = require('./users/router');
const authRouter = require('./auth/router');
const eventsRouter = require('./events/router');
const ticketRouter = require('./tickets/router');

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on port ${port}`));

app.use(cors());
app.use(jsonParser);
app.use(usersRouter);
app.use(authRouter);
app.use(eventsRouter);
app.use(ticketRouter);

const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(express.json());

//Add Router
const usersRouter = require('./usersRouter.js');
server.use('/api', UsersRouter);

module.exports = server;

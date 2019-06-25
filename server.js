const express = require('express');
const helmet = require('helmet');
const usersRouter = require('./usersRouter.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', usersRouter);

//Add Router

module.exports = server;

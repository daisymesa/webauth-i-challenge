const express = require('express');
const helmet = require('helmet');
const server = express();

const knex = require('knex');
const knexConfig = require('./knexfile')
const db = knex(knexConfig.development);

server.use(helmet());
server.use(express.json());


module.exports = server;

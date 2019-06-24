const express = require('express');
const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


router.get('/users', (req, res) => {
    db('users')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})
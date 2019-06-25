const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


router.get('/', (req, res) => {
    res.send(`
    <h2>Router is working!!</h2>
    `)
})

/*

router.get('/', (req, res) => {
    db('users')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

*/

module.exports = router;
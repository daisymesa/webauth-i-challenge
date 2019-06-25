const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const bcrypt = require('bcryptjs');

/*
router.get('/', (req, res) => {
    res.send(`
    <h2>Router is working!!</h2>
    `)
})
*/

router.get('/', (req, res) => {
    db('users')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})


// POST:
//Creates a user using the information sent inside the body of the request. 
//Hash the password before saving the user to the database.
router.post('/register', (req, res) => {

})


// POST:
//Use the credentials sent inside the body to authenticate the user. 
//On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. 
//If login fails, respond with the correct status code and the message: 'You shall not pass!'
router.post('/login', (req, res) => {
    
})


// GET:
//If the user is logged in, respond with an array of all the users contained in the database. 
//If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.
router.get('/users', (req, res) => {
    
})


module.exports = router;
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
    let newUser = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    // const newUser = { 
    //     username: req.body.name,
    //     password: req.body.password
    // }

    db('users')
        .insert(newUser)
        .then(addedUser => {
            res.status(201).json(addedUser);
        })
        .catch(error => {
            res.status(500).json({
                error: 'The new user information could not be added.'
            })
        })
})


// POST:
//Use the credentials sent inside the body to authenticate the user. 
//On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. 
//If login fails, respond with the correct status code and the message: 'You shall not pass!'
router.post('/login', (req, res) => {
    const credentials = req.body;
    if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
        return res.status(401).json({ error: 'Incorrect credentials' });
    } else {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }
})


// GET:
//If the user is logged in, respond with an array of all the users contained in the database. 
//If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.
router.get('/users', (req, res) => {
    const credentials = req.body;
    if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
        db('users')
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(500).json({ error: 'You shall not pass!' })
            })
    } else {
        res.status(500).json({ message: 'Invalid Credentials' })
    }
})


module.exports = router;
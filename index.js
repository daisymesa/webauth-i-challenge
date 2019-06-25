const express = require('express');
const helmet = require('helmet');

const server = require ('./server.js')

const port = 8600;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

/*
// 'Sanity Check'
server.get('/', (req, res) => {
    res.send(`
    <h2>Server is working!!</h2>
    `)
})

*/
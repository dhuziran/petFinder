// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    console.log(pets)
    res.send(pets)

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const singlePet = pets.find((e) => {
        if(e.name == req.params.name){
            return true
        }
    })
    res.send(singlePet)


    // find the pet in the pets array

    // send the pet as a response

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner

    // find the pet in the pets array
    const pet = pets.find((e) => {
        if(e.owner == owner){
            return true
        }
    });

    // send the pet as a response
    res.send(pet)

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
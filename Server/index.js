require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require("cors");
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller')
const app = express();


app.use(express.json())
app.use(cors())

app.post('/api/seed', seed)

app.get('/api/countries', getCountries)

app.post('/api/cities', createCity)
app.get('/api/cities', getCities)
app.delete('/api/cities/:id', deleteCity)

// app.use(rollbar.errorHandler());

const port = process.env.PORT || 4545;

app.listen(SERVER_PORT, ()=> console.log(`up on ${SERVER_PORT}`))
app.listen(port, ()=> {
    console.log(`Running on ${port}`)
});


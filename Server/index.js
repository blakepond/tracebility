require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require("cors");
// const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller')
const app = express();


app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "../Public/index.html"));
    // rollbar.info("HTML file served successfully")
})

app.use("/css", express.static(path.join(__dirname,'/Public/index.css')))

app.get("/js", (req,res)=> {
    res.sendFile(path.join(__dirname, '../Public/main.js'))
})

app.get("/js", (req,res)=> {
    res.sendFile(path.join(__dirname, '../Server/controller.js'))
})
app.get("/js", (req,res)=> {
    res.sendFile(path.join(__dirname, '../Server/index.js'))
})

app.post('/seed', seed)

app.get('/countries', getCountries)

app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

// app.use(rollbar.errorHandler());

const port = process.env.PORT || 4545;

// app.listen(SERVER_PORT, ()=> console.log(`up on ${SERVER_PORT}`))
app.listen(port, ()=> {
    console.log(`Running on ${port}`)
});


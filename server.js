const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const db = require('./models');

const app = express()

// mongoose connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// express parsing incoming data
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serving public folder
app.use(express.static('public'))
public = path.join(__dirname, "/public")

// send index
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: public})
})

// send exercise
app.get('/exercise', (req, res) => {
    res.sendFile('./exercise.html', {root: public})
})

// send stats
app.get('/stats', (req, res) => {
    res.sendFile('./stats.html', {root: public})
})

// app listener
app.listen(PORT, function () {
    console.log(`Serving app on: http://localhost:${PORT}`)
})
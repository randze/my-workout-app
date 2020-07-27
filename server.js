const mongoose = require('mongoose')
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/twoter",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// parsing incoming data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serving public folder
app.use(express.static('public'))

const db = require('./models');


// endpoints
app.get('/', async function (req, res) {
    // get the list of tweets
    const userList = await db.User.find({}).populate('tweets')

    res.send(userList)
})

app.post('/', async function (req, res) {
    console.log(`[POST] /tweets, body:`, req.body)
    try {
        
    } catch (err) {
        console.log(`x sorry something went wrong`, err)
        res.send({ status: false, message: `Sorry something went wrong: ${err.message}` })
    }
})


app.listen(PORT, function () {
    console.log(`Serving app on: http://localhost:${PORT}`)
})
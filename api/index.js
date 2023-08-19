const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
mongoose.connect(process.env.MONGO_URL)

const app = express()

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => {

})

app.listen(4040)
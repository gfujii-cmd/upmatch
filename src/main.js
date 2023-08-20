// Application modules
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// Environment config
require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

const app = express()

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connect successfully to database")
    app.listen(PORT, () => {
        console.log("Application running at port " + PORT)
    })
}).catch((err) => {
    console.error("Could not connect to mongo database. Error: " + err)
})


// Application modules
const express = require('express')
const mongoose = require('mongoose')

// Environment config
require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// Routes
const PlayerRoutes = require('./player/routes/PlayerRoutes')
const LeagueRoutes = require('./league/routes/LeagueRoutes')

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connect successfully to database")

    app.use("/player", PlayerRoutes)
    app.use("/league", LeagueRoutes)

    app.listen(PORT, () => {
        console.log("Application running at port " + PORT)
    })
}).catch((err) => {
    console.error("Could not connect to mongo database. Error: " + err)
})


const mongoose = require("mongoose")
const { PlayerModel } = require('../model/Player')

module.exports = {
    register: (req, res) => {
        const payload = req.body
        console.log(req.body)

        const player = new PlayerModel(payload)

        player.save().then(() => {
            res.status(201).json({})
        })
    }
}
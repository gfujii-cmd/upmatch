const mongoose = require("mongoose")
const { LeagueModel } = require('../model/League')
const { PlayerModel } = require("../../player/model/Player")

module.exports = {
    register: (req, res) => {
        const payload = req.body

        const league = new LeagueModel(payload)

        league.save().then(() => {
            res.status(201).json({})
        })
    },

    addPlayerToLeague: async (req, res) => {
        const playerId = req.query.playerId
        const leagueId = req.query.leagueId

        try {
            const player = await PlayerModel.findById(playerId);
            try {
                const league = await LeagueModel.findById(leagueId)

                if(league.players.some(player => player.id === playerId)) {
                    const response = {
                        error: `Player with id ${playerId} is already in this league`,
                        errorCode: 409
                    }
                    res.status(409).json(response)
                } else {
                    league.players.push({player, points: 0})
                    
                    const response = {
                        message: `Player added to the league successfully`,
                        data: league
                    }
                    res.status(200).json(response)
                }
            } catch (err) {
                const response = {
                    error: `League with id ${leagueId} does not exist in the database`,
                    errorCode: 404
                }
                res.status(404).json(response)
            }
        } catch(err) {
            const response = {
                error: `Player with id ${playerId} does not exist in the database`,
                errorCode: 404
            }
            res.status(404).json(response)
        }
   
    },

    findLeagueById: async (req, res) => {
        const leagueId = req.query.id

        try {
            const league = await LeagueModel.findById(leagueId)
            res.status(200).json(league)
        } catch (err) {
            const response = {
                error: `League with id ${leagueId} does not exist in the database`,
                errorCode: 404
            }
            res.status(404).json(response)
        }
    }
}
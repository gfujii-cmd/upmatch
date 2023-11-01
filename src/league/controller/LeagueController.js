const { LeagueModel } = require('../model/League')
const csv = require("csv")
const fs = require("fs")
const { Readable } = require('stream')
const readline = require("readline")
const { Console } = require('console')

module.exports = {
    register: async (req, res) => {
        const payload = req.body

        const league = new LeagueModel(payload)

        league.save().then(() => {
            res.status(201).json({})
        })
    },

    registerWithBandai: async (req, res) => {
        const files = req.files
        const bufferFile = files[0].buffer
        const bufferJson = files[1].buffer
        const leaguePayload = JSON.parse(bufferJson.toString())

        const readableFile = new Readable()
        readableFile.push(bufferFile)
        readableFile.push(null)

        const lines = readline.createInterface({
            input: readableFile
        })

        const players = []
        for await(let line of lines) {
            const lineSplit = line.split(",")
            // 0 - RANKING \ 1 - USERNAME \ 2 - WIN POINTS \ 3 - OWM \ 4 - OOWM \ 5 - MEMO
            const player = {
                bandaiId: lineSplit[1],
                rank: lineSplit[0],
                points: lineSplit[2]
            }
            
            if(!(lineSplit.includes(' Win Points'))) {
                players.push(player)
            }
        }

        const league = new LeagueModel(leaguePayload)
        league.players = players
        
        league.save().then(() => {
            res.status(204).json({})
        })

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
    },

    findLeagueByDate: async (req, res) => {
        const date = req.query.date

        try {
            const leagues = await LeagueModel.find({'startDate': date})
            if(leagues.length === 0) {
                const response = {
                    error: `No leagues were found`,
                    errorCode: 404
                }
                res.status(404).json(response)
            } else {
                res.status(200).json(leagues)
            }
        } catch (err) {
            const response = {
                error: `Something went wrong`,
                errorCode: 400
            }
            res.status(400).json(response)
        }
    },

    findLeagueByDateRange: async (req, res) => {
        const sDate = req.query.sDate
        const eDate = req.query.eDate

        try {
            const leagues = await LeagueModel.find({'startDate': {$gte: sDate, $lte: eDate}})
            if(leagues.length === 0) {
                const response = {
                    error: `No leagues were found`,
                    errorCode: 404
                }
                res.status(404).json(response)
            } else {
                res.status(200).json(leagues)
            }
        } catch (err) {
            const response = {
                error: `Something went wrong`,
                errorCode: 400
            }
            res.status(400).json(response)
        }
    }
}
const LeagueController = require('../controller/LeagueController')
const leagueSchema = require('../../common/schemas/VLeagueSchema')
const SchemaValidationMiddleware = require('../../common/middlewares/SchemaValidator')

const router = require('express').Router()

router.post("/register", [SchemaValidationMiddleware.verify(leagueSchema)], LeagueController.register)

router.get("/findBy", LeagueController.findLeagueById)

router.put("/addPlayerTo", LeagueController.addPlayerToLeague)

module.exports = router
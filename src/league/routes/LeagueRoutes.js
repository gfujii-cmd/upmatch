const LeagueController = require('../controller/LeagueController')
const leagueSchema = require('../../common/schemas/VLeagueSchema')
const SchemaValidationMiddleware = require('../../common/middlewares/SchemaValidator')
const multer = require("multer");

const router = require('express').Router()
const mutlerConfig = multer()

router.post("/register", [SchemaValidationMiddleware.verify(leagueSchema)], LeagueController.register)

router.get("/findById", LeagueController.findLeagueById)

router.post("/registerWithBandai", mutlerConfig.any(), LeagueController.registerWithBandai)

// router.put("/addPlayerTo", LeagueController.addPlayerToLeague)

module.exports = router
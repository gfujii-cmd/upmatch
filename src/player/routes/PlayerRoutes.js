const PlayerController = require('../controller/PlayerController')
const playerSchema = require('../../common/schemas/VPlayerSchema')
const SchemaValidationMiddleware = require('../../common/middlewares/SchemaValidator')

const router = require('express').Router()

router.post("/register", [SchemaValidationMiddleware.verify(playerSchema)], PlayerController.register)

module.exports = router
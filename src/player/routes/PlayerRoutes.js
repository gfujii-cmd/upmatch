const PlayerController = require('../controller/PlayerController')

const router = require('express').Router()

router.post("/register", PlayerController.register)

module.exports = router
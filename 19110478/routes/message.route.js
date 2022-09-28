const express = require('express')
const router = express.Router()

const MessageController = require('../controllers/message.controller')

router.get('/:id', MessageController.getStudent)

router.get('/', MessageController.getAllStudent)

module.exports = router
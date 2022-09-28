const express = require('express')
const router = express.Router()

const controller_19110478 = require('../controllers/19110478.controller')

router.get('/:id', controller_19110478.get)

router.post('/', controller_19110478.post)

module.exports = router
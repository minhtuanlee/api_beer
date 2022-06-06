const express = require('express')
const BeerController = require('../controller/BeerController')
const router = express.Router()


router.get('/beer', BeerController.getAll)
router.post('/beer', BeerController.add)
router.put('/beer/:id', BeerController.update)
router.delete('/beer/:id', BeerController.delete)

module.exports = router

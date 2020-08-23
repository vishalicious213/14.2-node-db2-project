const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('GET cars data endpoint')
})

module.exports = router
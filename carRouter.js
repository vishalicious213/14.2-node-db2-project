const express = require('express')
const router = express.Router()
const db = require('./data/config')

router.get('/', async (req, res, next) => {
    try {
        const cars = await db.select("*").from("cars")
        res.status(200).json(cars)
        // res.status(200).send('GET cars data endpoint')
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const car = await db.select("*").from("cars").where("id", req.params.id).limit(1)
        res.status(200).json(car)
        // res.status(200).send('GET car by ID')
    } catch (error) {
        next(error)
    }
})

module.exports = router
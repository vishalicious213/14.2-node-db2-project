const express = require('express')
const router = express.Router()
const db = require('./data/config')

// GET all cars
router.get('/', async (req, res, next) => {
    try {
        const cars = await db.select("*").from("cars")
        res.status(200).json(cars)
        // res.status(200).send('GET cars data endpoint')
    } catch (error) {
        next(error)
    }
})

// GET car by ID
router.get('/:id', async (req, res, next) => {
    try {
        // using first() returns a single object, not an array
        const car = await db.select("*").from("cars").where("id", req.params.id).first()
        // using limit(1) returns an array with a single object in it
        // const car = await db.select("*").from("cars").where("id", req.params.id).limit(1)
        res.status(200).json(car)
        // res.status(200).send('GET car by ID')
    } catch (error) {
        next(error)
    }
})

// POST new car
router.post('/', async (req, res, next) => {
    try {
        const newCarID = await db

        .insert({
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            titleStatus: req.body.titleStatus
        })
        .into("cars")

        const viewCar = await db("cars").where("id", newCarID).limit(1)
        res.status(201).json(viewCar)
    } catch (error) {
        next(error)
    }
})

module.exports = router
'use strict'
const router = require('express').Router()
const { Creature } = require('../db')


router.get("/", async (req, res, next) => {
    try{
        const creatures = await Creature.findAll()
        res.json(creatures)
    }
    catch (err) {
        console.log("we done failed")
        res.status(500).send("No combatants found!")
    }
})

module.exports = router

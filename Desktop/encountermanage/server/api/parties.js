'use strict'
const router = require('express').Router()
const { Party } = require('../db')


router.get("/", async (req, res, next) => {
    try{
        const party = await Party.findAll()
        res.json(party)
    }
    catch (err) {
        console.log("we done failed")
        res.status(500).send("No combatants found!")
    }
})

module.exports = router

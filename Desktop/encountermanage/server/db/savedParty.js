const Sequelize = require('sequelize')
const db = require ('./database')

const SavedParty = db.define('savedParty', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = SavedParty
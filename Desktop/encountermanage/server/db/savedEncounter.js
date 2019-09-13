const Sequelize = require('sequelize')
const db = require ('./database')

const Encounter = db.define('encounter', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Encounter


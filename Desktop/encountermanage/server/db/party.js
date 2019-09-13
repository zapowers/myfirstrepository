const Sequelize = require('sequelize')
const db = require ('./database')

const Party = db.define('party', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 70]
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://i.imgur.com/kjxu6KZ.jpg"
    },
    hitPoints: {
        type: Sequelize.INTEGER,
    },
    armorClass: {
        type: Sequelize.INTEGER
    },
    hitDiceNumber: {
        type: Sequelize.INTEGER
    },
    hitDiceType: {
        type: Sequelize.INTEGER,
        validate: {
            isIn: {
                args: [[6, 8, 10, 12]],
                msg: "invalid dice"
            }
        }
    },
    hitPointsAdd: {
        type: Sequelize.INTEGER
    },
    initiativeBonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    attackNameAndType: {
        type: Sequelize.STRING,
        defaultValue: "melee",
        validate: {
            len: [1, 70]
        }
    },
    attackHitDieNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
    attackDiceType: {
        type: Sequelize.INTEGER,
        validate: {
            isIn: {
                args: [[4, 6, 8, 10, 12, 20]],
                msg: "invalid dice"
            }
        }
    },
    attackPointsAdd: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    toHitBonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    secondAttackNameAndType: {
        type: Sequelize.STRING,
        validate: {
            len: [1, 70]
        }
    },
    secondAttackHitDieNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
    secondAttackDiceType: {
        type: Sequelize.INTEGER,
        validate: {
            isIn: {
                args: [[4, 6, 8, 10, 12, 20]],
                msg: "invalid dice"
            }
        }
    },
    secondAttackPointsAdd: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    secondToHitBonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    spellSave: {
        type: Sequelize.INTEGER,
    },
    spellAttack: {
        type: Sequelize.INTEGER,
    },
    firstLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    secondLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    thirdLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    fourthLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    fifthLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    sixthLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    seventhLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    eighthLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    ninthLevelSpells: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    movementSpeed: {
        type: Sequelize.INTEGER,
        defaultValue: 30,
    }
})

module.exports = Party
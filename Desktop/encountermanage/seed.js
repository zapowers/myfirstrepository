const { green, red } = require('chalk')
const { db } = require('./server/db')
const { Creature } = require('./server/db')
const { Party } = require('./server/db')
const { SavedParty } = require('./server/db')
const { Encounter } = require('./server/db')

const seedCreatures = [
  {
        name: 'Goblin',
        armorClass: 15,
        hitDiceNumber: 2,
        hitDiceType: 6,
        hitPointsAdd: 0,
        initiativeBonus: 2,
        attackHitDieNumber: 1,
        attackDiceType: 6,
        attackPointsAdd: 2,
        toHitBonus: 4,
  },
  {
    name: 'Kobold',
    armorClass: 12,
    hitDiceNumber: 2,
    hitDiceType: 6,
    hitPointsAdd: -2,
    initiativeBonus: 2,
    attackHitDieNumber: 1,
    attackDiceType: 4,
    attackPointsAdd: 2,
    toHitBonus: 4,
},
{
    name: 'Ogre',
    armorClass: 11,
    hitDiceNumber: 7,
    hitDiceType: 10,
    hitPointsAdd: 21,
    initiativeBonus: -1,
    attackHitDieNumber: 2,
    attackDiceType: 6,
    attackPointsAdd: 4,
    toHitBonus: 6,
},
]

const seedParty = [
    {
        name: 'Pat',
        armorClass: 14,
        hitPoints: 15,
        intitiativeBonus: 1,
        attackHitDieNumber: 1,
        attackDiceType: 6,
        attackPointsAdd: 4,
        toHitBonus: 6,
    },
    {
        name: 'John',
        armorClass: 15,
        hitPoints: 12,
        intitiativeBonus: 2,
        attackHitDieNumber: 1,
        attackDiceType: 8,
        attackPointsAdd: 3,
        toHitBonus: 5,
    },
    {
        name: 'Ed',
        armorClass: 12,
        hitPoints: 17,
        intiativeBonus: 3,
        attackHitDieNumber: 1,
        attackDiceType: 6,
        attackPointsAdd: 4,
        toHitBonus: 6,
    },
]

const seedSavedParty = [
  {name: "First Party"},
  {name: "Adventure Group"}
]

const seedEncounter = [
  {name: "Goblin Fight"},
  {name: "Ogre Fight"}
]

const seed = async () => {
  try {
    await db.sync({ force: true })
    console.log('Seeding the database...')
    await db.sync({ force: true })
    await Creature.create(seedCreatures[0])
    await Creature.create(seedCreatures[1])
    await Creature.create(seedCreatures[2])
    await Party.create(seedParty[0])
    await Party.create(seedParty[1])
    await Party.create(seedParty[2])
    await SavedParty.create(seedSavedParty[0])
    await SavedParty.create(seedSavedParty[1])
    await Encounter.create(seedEncounter[0])
    await Encounter.create(seedEncounter[1])
  } catch (err) {
   console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
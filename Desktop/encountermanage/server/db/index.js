const db = require('./database')
const Creature = require('./creature')
const Party = require('./party')
const SavedParty = require('./savedParty')
const Encounter = require('./savedEncounter')

Encounter.belongsToMany(Creature, {through: "EncounterCreature"})
Creature.belongsToMany(Encounter, {through: "EncounterCreature"})
SavedParty.hasMany(Party)
Party.belongsTo(SavedParty)

module.exports = {
    // Include your models in this exports object as well!
    db,
    Creature,
    Party,
    SavedParty,
    Encounter
  }
import React, {Component} from 'react';



export default class Encounter extends Component {



    render () {
        this.props.combatants.forEach(combatant => (combatant.hitPoints ? combatant : combatant.hitPoints = ((Number(combatant.hitDiceNumber) * Math.floor(Math.random() * Number(combatant.hitDiceType))) + Number(combatant.hitPointsAdd) + 1).toString()))
        this.props.combatants.forEach(combatant => (combatant.initiative ? combatant : combatant.initiative = (1 * Math.floor(Math.random() * 20)) + Number(combatant.initiativeBonus) + 1).toString())
        this.props.combatants.sort(function (a, b) {
            return a.initiative - b.initiative;
          });
        console.log(this.props.combatants)
        return (
    <div>
        {this.props.combatants.map(combatant => (
          <div className="new-project-form">
              <img src ={combatant.imageUrl} />
            <h3>{combatant.name}</h3>
            <p>Hit Points: <input
                className="form-control"
                type="number"
                style={{width: 40}}
            /> / {combatant.hitPoints} Armor Class: {combatant.armorClass} Intitiative: {combatant.initiative}</p>
          </div>))}  
    </div>    
        )
    }
}
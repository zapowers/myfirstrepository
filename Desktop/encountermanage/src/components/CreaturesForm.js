import React, {Component} from 'react';
import axios from 'axios'

const defaultState = {
    name: "",
    armorClass: 0,
    hitDiceNumber: 0,
    hitDiceType: 0,
    hitPointsAdd: 0,
    intitiativeBonus: 0,
    attackHitDieNumber: 0,
    attackDiceType: 0,
    attackPointsAdd: 0,
    toHitBonus: 0,
}

export default class Form extends Component {
    constructor() {
        super()
        this.state = defaultState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.setState({
            warningMessage: 'Required field!'
        })
    }

    handleChange (evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }

    async handleSubmit (evt) {
        evt.preventDefault()
        try {
          const res = await axios.post('/api/creatures/', this.state)
          this.props.addProject(res.data)
          this.setState(defaultState)
        } catch (err) {
          this.setState({
            error: `The creatures was not created: ${err.message}`
          })
        }
      }

    render () {
        return (

    <div id = "newcreature" className="form">      
        <h2>New Creature</h2>
        <form className="new-project-form" onSubmit={this.handleSubmit}>
            <div className="input-group">
            {!this.state.name.length ? <span className = "warning">{this.state.warningMessage}</span> : 
                <div /> }
                <div />
            Name: <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
             />
            Hit Point Equation: <input
                className="form-control"
                type="number"
                name="hitDieNumber"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            d 
                <select className="form-control" name="hitDiceType" style= {{display: 'inline-block'}} onChange={this.handleChange}>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                </select>
            +  <input
                className="form-control"
                type="number"
                name="hitPointsAdd"
                style={{width: 30}}
                onChange={this.handleChange}
            />
             Initiative Bonus: <input
                className="form-control"
                type="number"
                name="initiativeBonus"
                style={{width: 30}}
                onChange={this.handleChange}
                value={this.state.description}
             />
            Armor Class: <input
                className="form-control"
                type="number"
                name="armorClass"
                style={{width: 30}}
                onChange={this.handleChange}
                value={this.state.description}
             />
            Primary Attack Type: 
                <select className="form-control" name="attackNameAndType" onChange={this.handleChange}>
                    <option value="melee">melee</option>
                    <option value="ranged">ranged</option>
                </select>
            Attack Damage Equation: <input
                className="form-control"
                type="number"
                name="attackHitDieNumber"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            d
                <select className="form-control" name="attackHitDiceType" style= {{display: 'inline-block'}} onChange={this.handleChange}>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                </select>
            +  <input
                className="form-control"
                type="number"
                name="attackPointsAdd"
                style={{width: 40}}
                onChange={this.handleChange}
            />
            To Hit Bonus:  <input
                className="form-control"
                type="number"
                name="toHitBonus"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            Movement Speed:  <input
                className="form-control"
                type="number"
                name="movementSpeed"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            <span className="input-group-btn">
            {this.state.error ? <div className='error'>{this.state.error}</div> : <div />}
                <button type="submit">Create Creature!</button>
            </span>
            </div>
        </form>
    </div>    
        )
    }
}
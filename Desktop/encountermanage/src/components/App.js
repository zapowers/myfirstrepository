import React, {Component} from 'react';
//import '../index.css';
import CreaturesForm from './CreaturesForm'
import PartyForm from './PartyForm'
import Dice from './Dice'
import Encounter from './Encounter'
import { connect } from 'react-redux'
import { fetchCreatures } from '../redux/creatures'
import { fetchParties } from '../redux/partyMember'
import axios from 'axios'




class App extends Component  {

  constructor(){
    super()
    this.state = {
      party: [],
      creatures: [],
      combatants: [],
      selectCreature: "",
      selectPartyMember: "",
    }
    this.addCreature=this.addCreature.bind(this)
    this.addParty=this.addParty.bind(this)
    this.handleCreatureChange = this.handleCreatureChange.bind(this)
    this.handlePartyChange = this.handlePartyChange.bind(this)
    this.handleCreatureSubmit = this.handleCreatureSubmit.bind(this)
    this.handlePartySubmit = this.handlePartySubmit.bind(this)
  }

  async componentDidMount(){
    this.props.getCreatures()
    this.props.getParty()
    const creatures = await axios.get(`/api/creatures/`)
    const party = await axios.get(`/api/parties/`)
    this.setState({
      creatures: creatures.data,
      party: party.data
    })
   }

    addCreature (creature) {
      this.setState({
          creatures: [...this.state.creatures, creature],
          selectedCombatants: [...this.state.combatants, creature]
      })
    }

    addParty (party) {
      this.setState({
          party: [...this.state.party, party],
          selectedCombatants: [...this.state.combatants, party]
      })
    }

    handleCreatureChange (evt) {
      let thisCreature = this.state.creatures.filter(creature => Number(event.target.value) === creature.id)
      this.setState({
        [evt.target.name]: thisCreature
      })
    }

    handlePartyChange (evt) {
      let thisParty = this.state.party.filter(party => Number(event.target.value) === party.id)
      this.setState({
        [evt.target.name]: thisParty
      })
    }
    
  handleCreatureSubmit (evt) {
      evt.preventDefault()
      console.log("this is creature submit")
      if (!this.state.selectCreature){
        let defaultCreature = this.state.creatures[0]
        this.setState({combatants: [...this.state.combatants, defaultCreature]})
      }
      else {
        let chosenCreature = this.state.selectCreature[0]
        this.setState({
          combatants: [...this.state.combatants, chosenCreature]
       })
     }
    }

    handlePartySubmit (evt) {
      evt.preventDefault()
      if (!this.state.selectPartyMember){
        let defaultParty = this.state.party[0]
        this.setState({combatants: [...this.state.combatants, defaultParty]})
      } else {
        let chosenParty = this.state.selectPartyMember[0]
        this.setState({
          combatants: [...this.state.combatants, chosenParty]
       })
      }
    }
  
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
         WELCOME TO THE ENCOUNTER MANAGEMENT APP
        </h2>
      </header>
      <Dice style= {{position: 'sticky'}} />
      <CreaturesForm />
      <PartyForm />
      <div>
        <form className="new-project-form" onSubmit={this.handleCreatureSubmit}>
          <div className="input-group">
            Add Creature:
            <select className="form-control" name="selectCreature" style= {{width: 90}} onChange={this.handleCreatureChange}>
                  {this.state.creatures && this.state.creatures.length ? this.state.creatures.map(creature => (
                    <option key = {creature.id} value = {creature.id}>{creature.name}</option>)) : 'None'
                    }
            </select>
            <button type="submit">Add Party Member!</button>
          </div>
        </form>
        <form className="new-project-form" onSubmit={this.handlePartySubmit}>
          <div className="input-group">
            Add Party Member:
              <select className="form-control" name="selectPartyMember" style= {{width: 90}} onChange={this.handlePartyChange}>
                  {this.state.party && this.state.party.length ? this.state.party.map(party => (
                    <option key = {party.id} value = {party.id}>{party.name}</option>)) : 'None'
                    }
              </select>
              <button type="submit">Add Party Member!</button>
          </div>
        </form>
        <Encounter combatants ={this.state.combatants} />
      </div>
    </div>
  );
}
}


function mapStateToProps (state) {
  return  { state: state }
}

const mapDispatchToProps = dispatch => {
  return {
      getCreatures: () => dispatch(fetchCreatures()),
      getParty: () => dispatch(fetchParties())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

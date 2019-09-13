import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchCreatures } from "../redux/creatures"
import { fetchParties } from "../redux/partyMember"



const defaultState = {
    diceType: 4,
    diceNumber: 0,
    diceAdder: 0,
    result: 0
}

class Dice extends Component {
    constructor() {
        super()
        this.state = defaultState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }

    async handleSubmit (evt) {
        evt.preventDefault()
        let result = ((Number(this.state.diceNumber) * Math.floor(Math.random() * Number(this.state.diceType))) + Number(this.state.diceAdder) + 1).toString()
        this.setState({result})
      }

    render () {
        return (

    <div id = "newcreature" id ="sticky" className="form">      
        <h2>Dice Roller</h2>
        <form className="new-project-form" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <div />
            Number of Dice: <input
                className="form-control"
                type="number"
                name="diceNumber"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            Dice Type:
                <select className="form-control" name="diceType" style= {{display: 'inline-block'}} onChange={this.handleChange}>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="20">20</option>
                </select>
            Modifier:  <input
                className="form-control"
                type="number"
                name="diceAdder"
                style={{width: 30}}
                onChange={this.handleChange}
            />
            <span className="input-group-btn">
            {this.state.error ? <div className='error'>{this.state.error}</div> : <div />}
                <button type="submit">Roll the Dice!</button>
            </span>
            </div>
            <div>
            {this.state.result !== 0 ? <h2>{this.state.result}</h2> : ""}
        </div>
        </form>
    </div>    
        )
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
  
  // Currently, we're just exporting the component as-is. When we're ready to
  // hook it up to the redux store, we'll export the connected component by default:
  export default connect(mapStateToProps, mapDispatchToProps)(Dice)
  
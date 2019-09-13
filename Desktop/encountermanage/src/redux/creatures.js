import axios from 'axios'

const SET_CREATURES = "SET_CREATURES"


export function setCreatures (creatures) {
    return {
        type: SET_CREATURES,
        creatures
    }
}

export const fetchCreatures = () => {
    return async dispatch => {
        try {
            console.log("here is a shot")
            const response = await axios.get('/api/creatures/')
            let creatures = response.data
            dispatch(setCreatures(creatures))
        }
        catch (err) {
            console.log("The creatures have revolted! ", err)
        }
    }
}

const initialState = []

export default function creatureReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CREATURES: 
            return action.creatures
        default:
            return state
    }
}
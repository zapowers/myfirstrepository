import axios from 'axios'

const SET_PARTY = "SET_PARTY"


export function setParties (party) {
    return {
        type: SET_PARTY,
        party
    }
}

export const fetchParties = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/api/parties/')
            let party = response.data
            dispatch(setParties(party))
        }
        catch (err) {
            console.log("The creatures have revolted! ", err)
        }
    }
}

const initialState = []

export default function partyReducer(state = initialState, action) {
    switch(action.type) {
        case SET_PARTY: 
            return action.party
        default:
            return state
    }
}
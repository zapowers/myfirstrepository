import { combineReducers } from 'redux';
import creatures from './creatures'
import partyMember from './partyMember'


const appReducer = combineReducers({
   creatures,
   partyMember,
 })

export default appReducer

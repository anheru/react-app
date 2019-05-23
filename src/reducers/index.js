import { combineReducers } from 'redux'
import counter from './counter'
import comics from './comics'

export default combineReducers({
  counter,
  comics
})
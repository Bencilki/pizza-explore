import { combineReducers } from 'redux'
import pizzas from './pizzas'
import selectedPizza from './selected-pizzas'

export default combineReducers({
  pizzas,
  selectedPizza
})

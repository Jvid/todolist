import {createStore,combineReducers} from 'redux'

import {reducer as todoReducer} from './TodoList/todos/index'
// import {reducer as filterReducer} from './TodoList/filter/index.js'
const reducer = combineReducers({
  todos: todoReducer,
  // filter: filterReducer
})

export default createStore(reducer);
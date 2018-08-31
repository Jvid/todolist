import {ADD_TODO,TRASH_TODO,DELETE_TODO,RESUME_TODO,FINISH_TODO} from './actionType.js'

/*
  un 未完成
  ed 已完成
  del 删除 
*/

let addFn = (state,action) => {
  if(state[action.time]){
    state[action.time].push({
      id: action.id,
      text: action.text,
      state: 'un',
      time: action.time
    })
  } else {
    state[action.time] = [action]
  }
  return state
}

let trashFn = (state,action) => {
  state[action.time] = state[action.time].filter((v) => {v.id !== action.id})
  return state
}

let changeFn = (state, action,st) => {
  state[action.time] = state[action.time].map((v) => {
    if(v.id ===  action.id){
      v.state = st
    }
    return v
  })
  return state
}

export default (state = [],action) => {
  switch (action.type) {
    case ADD_TODO:
      return addFn(state,action)
      break;
    case TRASH_TODO:
      return trashFn(state, action)
      break;
    case DELETE_TODO:
      return changeFn(state, action,'del')
      break;
    case RESUME_TODO:
      return changeFn(state, action,'un')
      break;
    case FINISH_TODO:
      return changeFn(state, action,'ed')
      break;
    default:
      return state
      break;
  }
}
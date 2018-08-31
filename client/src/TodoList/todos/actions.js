import {ADD_TODO,TRASH_TODO,DELETE_TODO,RESUME_TODO,FINISH_TODO} from './actionType.js'

let nexTodoId = 0

export const addTodo = (text,time) => ({
  type: ADD_TODO,
  state: 'un',
  id: nexTodoId++,
  text: text,
  time: time
})

export const trashTodo = (id,time) => ({
  type: TRASH_TODO,
  id: id,
  time: time
})

export const deleteTodo = (id,time) => ({
  type: DELETE_TODO,
  id: id,
  time: time
})

export const resumeTodo = (id,time) => ({
  type: RESUME_TODO,
  id: id,
  time: time
})

export const finishTodo = (id, time) => ({
  type: FINISH_TODO,
  id: id,
  time: time
})
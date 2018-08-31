import React from 'react'

const TodoList = ({todos,onDeleteTodo,onFinishTodo,onResumeTodo}) => {
  return (
    <ul>
      {
        todos.map((item) => {
          <TodoItem 
            key={item.id}
            text={item.text}
            state={item.state}
            onDelete={() => onDeleteTodo()}
          />
        })
      }
    </ul>
  )
}

export default TodoList
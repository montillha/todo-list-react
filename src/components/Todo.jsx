//rafce -atalho para criar componente
import React from 'react'

const Todo = ({todo,removeTodo,completeTodo}) => {
  return (
    <div 
    className="todo" 
    style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
    <div className="content">
      <p>{todo.text}</p>
      <p className="categoria">
        ({todo.category})
      </p>
    </div>
    <div>
      <button onClick={()=>completeTodo(todo.id)} className='complete'> Completar</button>
      <button onClick={()=>removeTodo(todo.id)} className='remove'>X</button>
    </div>
  </div>
  )
}

export default Todo
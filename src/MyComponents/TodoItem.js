import React from 'react'

export const TodoItem = ({todo,onDelete}) => {  //instead of using props, we can directly pick the attribute also ->  ({todo})
  return (
    <div>
        {todo.sno}
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}


import React from 'react'
import { TodoItem } from './TodoItem'

export const  Todos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3' >TODOs List</h3>
        {props.todos.length == 0 ? "No todos present" :
            props.todos.map((each)=>{
                 {/* in case we have multiple tags in return statement we need to wrap it with <> </> */}
                return(                          
                    <TodoItem todo={each} key={each.sno} onDelete={props.onDelete}/>
                )}
            )
        }
        {/* {props.todos} */}
    </div>
  )
}


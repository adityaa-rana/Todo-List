import React from 'react'
import TodoItem from './todoitem'
export default function Todo(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>Todos List</h3>
        {props.todos.length===0?
        <div className="my-3 h-100 border border-blue-500 p-4">
          <div className="text-center ">
            No Todos to display.
          </div>
        </div>:

        props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })} 
    </div>
  )
}

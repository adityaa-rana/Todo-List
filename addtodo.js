import React from 'react'
import { useState } from 'react'
export default function AddTodo(props) {
    const [title,settitle]=useState("")
    const [desc,setdesc]=useState("")

    const addnewtodo=(e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("DESC AND TITLE can't be blank")
        }
        props.addnew(title,desc)
        settitle("")
        setdesc("")
    }
  return (
    <div className='container my-4'>
        <h3 className='text-center'> ADD TODO</h3>
        <form onSubmit={addnewtodo}>
            <div class="mb-3">
                <label class="form-label">TITLE</label>
                <input type="text"
                value={title}
                onChange={(e)=>{
                    settitle(e.target.value)
                }}
                class="form-control" 
                id="ttl" />
            </div>
            <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" 
                value={desc} 
                onChange={(e)=>{
                    setdesc(e.target.value)
                }}
                class="form-control" 
                id="dsc" />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

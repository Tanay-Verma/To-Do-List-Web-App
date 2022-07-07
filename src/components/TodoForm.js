import React from 'react'
import "../styles/TodoForm.css"

export default function TodoForm() {
  
  return (
    <div className='todoform'>
        <div>
            <input className='todoform--input' placeholder='Your Task'/>
        </div>
        <button className='todoform--btn'>Add Task</button>
    </div>
  )
}

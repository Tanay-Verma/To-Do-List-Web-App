import React from 'react'
import "../styles/TodoForm.css"

export default function TodoForm() {
  return (
    <div className='todoform'>
        <div>
            <input placeholder='Your Task'/>
        </div>
        <div>
            <textarea placeholder='Your description'/>
        </div>
        <button>Add Task</button>
    </div>
  )
}

import React from 'react'
import '../styles/Task.css'

export default function Task() {
  return (
    <div className='task'>
        <input type='checkbox' className='task--check'/>
        <h2 className='task--text'>Dummy Task</h2>
        <button className='task--delete'>Delete Task</button>
    </div>
  )
}

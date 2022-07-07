import React from 'react'
import Task from './Task'
import '../styles/TodoList.css'

export default function TodoList() {
  return (
    <div className='todoList'>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </div>
  )
}

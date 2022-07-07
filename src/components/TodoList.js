import React from 'react'
import Task from './Task'
import '../styles/TodoList.css'

export default function TodoList({taskArr, setTaskArr}) {
  let tasks = taskArr.map(task=>{
    return (<Task task={task} setTaskArr={setTaskArr}/>)
  })
  return (
    <div className='todoList'>
        {tasks}
    </div>
  )
}

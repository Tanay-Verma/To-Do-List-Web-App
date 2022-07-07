import React from 'react'
import '../styles/Task.css'

export default function Task({task, setTaskArr}) {
  function handelClick(){
    setTaskArr(prevArr => prevArr.filter(function(value,index,arr){
      return value !== task
    }))
  }

  return (
    <div className='task'>
        <input type='checkbox' className='task--check' />
        <h2 className='task--text'>{task}</h2>
        <button className='task--delete' onClick={handelClick}>Delete Task</button>
    </div>
  )
}

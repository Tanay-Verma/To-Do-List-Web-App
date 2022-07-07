import React from 'react'
import '../styles/Task.css'

export default function Task({task,taskArr, setTaskArr}) {
  function handelClick(){
    setTaskArr(prevArr => prevArr.filter(function(value,index,arr){
      return value !== task
    }))
  }

  function handelCheck(){
    setTaskArr(taskArr.map(ele => ele.task === task.task ? {...ele, isClicked : !task.isClicked}: ele))
  }

  return (
    <div className='task'>
        <input type='checkbox' className='task--check' checked={task.isClicked} onChange={handelCheck}/>
        <h2 className='task--text'>{task.task}</h2>
        <button className='task--delete' onClick={handelClick}>Delete Task</button>
    </div>
  )
}

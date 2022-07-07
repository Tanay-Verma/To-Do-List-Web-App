import React from 'react'
import "../styles/TodoForm.css"

export default function TodoForm({setTask, task, setTaskArr, taskArr}) {
  function handelChange(event){
    let {value} = event.target
    // console.log(value)
    setTask(value.trim())
  }

  function handelClick(){
    if (task !== '' && !taskArr.some(function(ele){return ele.task === task})){
      setTaskArr([...taskArr,{task:task , isClicked:false}])}
      console.log(taskArr)
  }

  return (
    <div className='todoform'>
        <div>
            <input className='todoform--input' placeholder='Your Task' maxLength={60} onChange={handelChange}/>
        </div>
        <button className='todoform--btn' onClick={handelClick}>Add Task</button>
    </div>
  )
}

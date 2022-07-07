import React from 'react'
import "../styles/TodoForm.css"

export default function TodoForm({setTask, task, setTaskArr, taskArr}) {
  function handelChange(event){
    let {value} = event.target
    // console.log(value)
    setTask(value.trim())
  }

  function handelClick(){

    if (task !== '' && !taskArr.includes(task)){
      setTaskArr([...taskArr,task])}
  }
  return (
    <div className='todoform'>
        <div>
            <input className='todoform--input' placeholder='Your Task' onChange={handelChange}/>
        </div>
        <button className='todoform--btn' onClick={handelClick}>Add Task</button>
    </div>
  )
}

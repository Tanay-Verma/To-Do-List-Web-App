import './App.css';
import Navbar from "./components/Navbar"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {useState} from 'react'

function App() {
  let [task,setTask] = useState("")
  let [taskArr,setTaskArr] = useState([])
  console.log(taskArr)
  return (
    <div className="App">
      <Navbar setTaskArr={setTaskArr}/>
      <TodoForm setTask={setTask} task={task} setTaskArr={setTaskArr} taskArr={taskArr}/>
      <TodoList taskArr={taskArr} setTaskArr={setTaskArr}/>
    </div>
  )
}

export default App;

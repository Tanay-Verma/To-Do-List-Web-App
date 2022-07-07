import './App.css';
import Navbar from "./components/Navbar"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;

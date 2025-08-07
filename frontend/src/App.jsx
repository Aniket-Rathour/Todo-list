import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import {Todos } from './components/Todos'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    fetch("https://todo-backend-chy7.onrender.com/todo")
  .then(async function (res){
    const json=await res.json();
    setTodos(json.todos);
  })
  },[update])
  

  return (
    <div>
      <CreateTodo setUpdate={setUpdate} update={update}></CreateTodo>
      <Todos todos ={todos}></Todos>
    </div>
  )    
}

export default App
   
import "./App.css"
import React, {useState} from 'react'
import Header from './components/Header'
import TodoEditer from './components/TodoEditer'
import TodoList from "./components/TodoList"

function App() {

  const onCreate = () =>{
    
  }
  return (
    <div className="App">
      <Header/>
      <TodoEditer onCreate={onCreate}/>
      <TodoList/>
    </div>
  )
}

export default App

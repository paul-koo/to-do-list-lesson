import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './components/Todolist';

function App() {
    const tasks1 = [
      { id: 1, title: 'HTML&CSS', isDone: false },
      { id: 2, title: 'JS', isDone: false },
      { id: 3, title: 'ReactJS', isDone: false },
      { id: 4, title: 'Redux', isDone: false },
    ]


    const [data, setData] = useState(tasks1)

    const [filter, setFilter] = useState<"all" | "active" | "completed">('all')

    
    function checkBox(taskID: number) {
      setData(data.map((elem: TaskType) => {
        if (elem.id === taskID) elem.isDone ? elem.isDone = false : elem.isDone = true
        return elem
      }))
    }
 
    let todoList = data
    if (filter === "active") {
      todoList = data.filter((elem)=> elem.isDone === false)
      
    }

    if (filter === "completed") {
      todoList = data.filter((elem)=> elem.isDone === true)
    }


    function removeTask(taskID: number) {
      setData(data.filter((elem) => {
       return taskID !== elem.id
      }))    
    }
    
   
    return (
      <div className="App">
        <Todolist title="What to learn" tasks={todoList} date='17.06.2024' removeTask={removeTask} filter={setFilter} checkBox={checkBox}/>
      </div>
    )
  }

export default App;



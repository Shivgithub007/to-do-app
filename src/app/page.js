'use client'

import { useState } from "react"
export default function Home() {

  const[task,setTask]=useState('');
  const[todo,setTodo]=useState([]);
  const[edit,setEdit]=useState(false);
  const[editedtask,seteditedtask]=useState('')
  const[index,setIndex]=useState(0);
  console.log(task);
  console.log(todo);

  function getValue(e){
    
    setTask(e.target.value);
    
  }

  function addtask(){
    let taskarr = [...todo, task];
    setTodo(taskarr);
    setTask("");
  }

  function deleteTask(i){
    let ar=[...todo];
    ar.splice(i,1);
    setTodo(ar);
  }

  function editTask(i){
    setEdit(true)
    setIndex(i);
    
  }

  function editedtaskfunc(e){
    seteditedtask(e.target.value)
    console.log(index);
    
  }
  function editnewValue(){
    let ar=[...todo];
    ar.splice(index,1,editedtask);
    setTodo(ar);
    setEdit(false)
  }
  return (
    <div>
      <div className="header">
        <h1 className="headerContent">-to-do-app-</h1>
      </div>
    <div>
    {
      (edit)?<div>
        Edit here <input onChange={editedtaskfunc}  className="border-2 border-black" />
      </div>:<div>
        Add task here <input onChange={getValue} value={task} className="border-2 border-black"/>
      </div>
    }
    {
      (edit)?
      <button onClick={editnewValue}>Edit task</button>
      :
      <button onClick={addtask} className="border-2 bg-cyan-600 p-3 rounded-lg">Add task</button>
    }
    </div>
    <div>
    <ul>
      {
        todo.map(function(value,i){
          return(
            <div>
            <li key={i}>{value}</li>
            <div>
              <button onClick={()=>{deleteTask(i)}}>delete</button>
              <button onClick={()=>{editTask(i)}}>Edit</button>
            </div>
          </div>
          )
        })
         
        
      }
    </ul>
    </div>

    </div>
  )
}

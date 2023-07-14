import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState([]);
    const [inputvalue,setInputvalue]=useState('');


    const handlechange =(e)=>{
        setInputvalue(e.target.value);
    }

    const handleAddtodo =()=>{
        if(inputvalue.trim() !==''){
            setTodo([...todo,inputvalue]);
            setInputvalue('');
        }
    }

    const handleDeletetodo =(i)=>{
        const updatetodo =[...todo];
        updatetodo.splice(i,1);
        setTodo(updatetodo);
     }
  return (
    <div>
        <h1>To Do List</h1>
        <input
        value={inputvalue}
        onChange={handlechange}
        placeholder='Add a task'
        />
        <button onClick={handleAddtodo}>Add</button>
        <ul>
            {todo.map((todos,index)=>(
                <li key={index}>
                    {todo}
                    <button onClick={()=>handleDeletetodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Todo

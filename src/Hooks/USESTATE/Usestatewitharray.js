import React, { useState } from 'react'

const Usestatewitharray = () => {

    const [item,setItem]=useState([]);

    const additem=()=>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={additem}>Ad a number</button>
      <ul>
        {
            item.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Usestatewitharray

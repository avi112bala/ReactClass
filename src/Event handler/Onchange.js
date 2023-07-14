import React, { useState } from 'react'

const Onchange = () => {
    const [Name,setName]=useState('avi')
    
    function change(e){
        setName(e.target.value)
    }

  return (
    <div>
      Name:<input type ="text" value={Name} onChange={change}/>
      <p>Name: {Name}</p>
     
    </div>
  )
}

export default Onchange

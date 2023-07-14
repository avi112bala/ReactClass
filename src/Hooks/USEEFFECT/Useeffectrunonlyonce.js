import React, { useEffect, useState } from 'react'

const Useeffectrunonlyonce = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

const mousemoveover=(e)=>{
    console.log('mouse event')
    setX(e.clientX);
    setY(e.clientY);
}


    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',mousemoveover)
    },[])
  return (
    <div>
      <h1>Hooks x {x} and Y {y}</h1>
    </div>
  )
}

export default Useeffectrunonlyonce

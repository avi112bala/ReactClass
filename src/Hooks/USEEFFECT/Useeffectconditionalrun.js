import React, { useEffect, useState } from 'react'

const Useeffectconditionalrun = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log('useeffect')
        document.title=`You clicked ${count} times`
    },[count])

    function handlechange(e){
      setName(e.target.value);
    }

    function handleclick(){
              setCount(count + 1);
    }
  return (
    <div>
        <input type='text'  value={name} onChange={handlechange}/>
        <button onClick={handleclick}> Click {count} times</button>
      
    </div>
  )
}

export default Useeffectconditionalrun

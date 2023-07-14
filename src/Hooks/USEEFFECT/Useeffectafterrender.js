import React, { useEffect, useState } from 'react'

const Useeffectafterrender = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    function handleclick(){
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={handleclick}> Click {count} times</button>
    </div>
  );
}

export default Useeffectafterrender

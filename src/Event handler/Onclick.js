import React from 'react'

const Onclick = () => { 

  function handlechange(){
    alert('a+b=5 ')
  }
  return (
    <div>
   <button onClick={handlechange}>Click me</button>
    </div>
  );
}

export default Onclick

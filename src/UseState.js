import React ,{useState} from 'react'

 const UseState = () => {
    const [count,setCount]=useState(0);
    function handlechange(){
      setCount(count+1)
    }
  return (
    <div>
      <h1>The value of x is {count}</h1>
      <button onClick={handlechange}>Increment</button>
    </div>
  );
}

export default UseState
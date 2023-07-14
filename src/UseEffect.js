import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);

useEffect(()=>{
  console.log(count)
},[count==5])


  return (
    <div>
      
      <h1>The value of x is {count}</h1>
      <button
        onClick={() => 
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
};

export default UseEffect;

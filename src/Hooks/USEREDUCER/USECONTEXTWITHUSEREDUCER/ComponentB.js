import React, { useContext } from 'react'
import { Countcontext } from './ComponentA'

const ComponentB = () => {
    const countConst=useContext(Countcontext);
  return (
    <div>
      <button onClick={() => countConst.CountDispatch("increment")}>increment</button>
      <button onClick={() => countConst.CountDispatch("increment")}>decrement</button>
      <button onClick={() => countConst.CountDispatch("increment")}>reset</button>
    </div>
  );
}

export default ComponentB

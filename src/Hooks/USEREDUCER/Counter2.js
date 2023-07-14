import React, { useReducer } from 'react'


const intialstate=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return intialstate
        default:
        return state
    }

}

const Counter2 = () => {
    const [count,dispatch]=useReducer(reducer,intialstate)
    const [counttwo,dispatchtwo]=useReducer(reducer,intialstate)
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Counttwo:{counttwo}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatchtwo("increment")}>incrementtwo</button>
      <button onClick={() => dispatchtwo("decrement")}>decrement2</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
      <button onClick={()=>dispatchtwo('reset')}>reset2</button>
    </div>
  );
}

export default Counter2

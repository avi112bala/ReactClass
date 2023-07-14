import React, { useReducer } from 'react'


const intialstate={
    firstcounter:0,
    secondcounter:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            // return {firstcounter:state.firstcounter +1}
            return {...state,firstcounter:state.firstcounter+ action.value}
        case 'decrement':
            // return {firstcounter:state.firstcounter -1}
            return {...state,firstcounter:state.firstcounter -action.value}
        case 'increment2':
            return {...state,secondcounter:state.secondcounter + action.value}
        case 'decrement2':
            return {...state,secondcounter:state.secondcounter - action.value}
        case 'reset':
            return intialstate
        default:
            return state
    }
}

const Counter1 = () => {
   const [count,dispatch]= useReducer(reducer,intialstate)
  return (
    <div>
      <h1>count:{count.firstcounter}</h1>
      <h1>Count:{count.secondcounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          increment2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Counter1

import React, { useReducer } from 'react';
import ComponentB from '../USECONTEXTWITHUSEREDUCER/ComponentB'

export  const Countcontext=React.createContext()

const intialisation=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return intialisation
        default:
            return state
    }
}

const ComponentA = () => {
    const [count,dispatch]=useReducer(reducer,intialisation)
  return (
    <Countcontext.Provider
    value={{countState:count,CountDispatch:dispatch}}
    >
    <div>
      <h1>count:{count}</h1>
     <ComponentB/>
    </div>
    </Countcontext.Provider>
  );
}

export default ComponentA

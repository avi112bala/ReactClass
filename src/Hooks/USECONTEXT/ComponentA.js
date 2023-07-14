import React, { createContext } from 'react'
import ComponentB from './ComponentB'

 export const user=createContext();
 export const channel = createContext();

const ComponentA = () => {
  return (
    <div>
      <user.Provider value={'Name'}>
        <channel.Provider value={'Avinash'}>
          <ComponentB />
        </channel.Provider>
      </user.Provider>
    </div>
  );
}

export default ComponentA

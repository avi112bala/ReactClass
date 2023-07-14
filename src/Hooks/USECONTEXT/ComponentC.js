import React, { useContext } from 'react'
import {user,channel} from './ComponentA'

const ComponentC = () => {

    const myuser=useContext(user);
    const myChannel=useContext(channel);

  return (
    <div>
      <h1>{myuser}</h1>
      <h1>{myChannel}</h1>
    </div>
  )
}

export default ComponentC

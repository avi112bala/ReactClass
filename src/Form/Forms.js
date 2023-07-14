import React, { useState } from 'react'

const Forms = () => {
    const [name,setName]=useState('')

    function handlechange (e){
        e.preventDefault();
        alert(`The name you enter is :${name}`)
    }
  return (
    <>
    
    <form onSubmit={handlechange}>
        <label>
            Enter your name<br/>
            <input 
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </label>
        <input type='submit'/>
    </form>
    </>
  )
}

export default Forms

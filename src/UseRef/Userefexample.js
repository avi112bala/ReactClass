import React, { useRef } from 'react'

 const Userefexample = () => {
    const inputref = useRef();

    function handleref(){
        // console.log(inputref,"handleref");
        inputref.current.focus();
        inputref.current.value="Avinash";

    }
  return (
    <div>
        <input ref={inputref }type="text"/>
        <button onClick={handleref}>Click here</button>
    </div>
  )
}

export default Userefexample    
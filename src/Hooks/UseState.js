import { useState } from "react";


function Counter(){
    // let number = 0;
    const [number,setNumber]=useState(0)

    function handleclick(e) {
      e.preventDefault();
    //   number++;
        setNumber(number+1)
         console.log(number);
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleclick}>Update</button>
        </>
    )
}

export default Counter;
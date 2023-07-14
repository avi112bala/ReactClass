import React, { useMemo, useState } from 'react'

 const Usememo = () => {
    const[countone,setCountone]=useState(0);
    const[counttwo,setCounttwo]=useState(0);
    function increment(){
        setCountone(countone+1)
    }

    function decrement(){
        setCounttwo(counttwo -1)
    }

    // const isEven =()=>{
    //     return countone%2===0
    // }
    const isEven= useMemo(()=>{
        for(let i=0;i<1000000000;i++){}
        return countone%2===0;

    },[countone])
  return (
    <>
      <button onClick={increment}>count is {countone}</button>
      <br/>
      {isEven?'even':'odd'}

      <button onClick={decrement}>count is {counttwo}</button>
    </>
  );
}

export default Usememo
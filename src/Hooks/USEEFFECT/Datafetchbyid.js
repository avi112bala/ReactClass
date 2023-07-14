import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Datafetchbyid = () => {
    const [posts,setPosts]=useState({});
    const [id,setId]=useState(1)


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])


    function handlechange(e){
            setId(e.target.value);
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the id number"
        onChange={handlechange}
      />
      <h1>{posts.title}</h1>
    </div>
  );
}

export default Datafetchbyid

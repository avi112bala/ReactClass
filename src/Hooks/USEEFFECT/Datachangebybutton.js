import { Input } from '@mui/base';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Datachangebybutton = () => {
    const [posts,setPosts]=useState({});
    const [id,setId]=useState(1);
    const [idbutton,setIdbutton]=useState(1)


    function handlechange(e){
        setId(e.target.value);
    }

        function handleclick(){
            setIdbutton(id)
        }



    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${idbutton}`)
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [idbutton]);
  return (
    <div>
        <Input type='text' placeholder='enter the id' onChange={handlechange}/>
        <button onClick={handleclick}>Fetch Data</button>
        <br/>
        <div>{posts.title}</div>
      
    </div>
  )
}

export default Datachangebybutton

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetchapi();
    },[])

    const fetchapi= async()=>{
  try{
    const responce = await axios.get("https://fakestoreapi.com/products");
    setData(responce.data);
}catch(error){
        console.log(error)
}
    }
  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Api

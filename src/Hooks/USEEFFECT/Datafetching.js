import React, { useEffect, useState } from "react";
import axios from "axios";

const Datafetching = () => {
  const [post, setPost] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  },[])
 
  return (
    <div>
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Datafetching;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangeTextColor } from './ThemeSlice';

const Theme = () => {
    const [color, setColor]=useState("white");
    const dispatch =useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={()=>{dispatch(ChangeTextColor(color))}}>Change color</button>
    </div>
  );
}

export default Theme

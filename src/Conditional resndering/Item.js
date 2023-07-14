import React from 'react'

const Item = ({ name, isPacked }) => {
 if(isPacked){
    return <li>{name} completed</li>
 }
 else{
    return <li>{name}</li>
 }
};

export default Item

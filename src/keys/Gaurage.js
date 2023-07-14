import React from 'react'
import Car from '../List/Car'

const Gaurage = () => {
    const cars =[
        {id:1,brand:"Avinash"},
        {id:2,brand:"great"},
        {id:3,brand:"good boy"}
    ]
  return (
    <div>
        <ul>
            {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}
        </ul>
      
    </div>
  )
}

export default Gaurage

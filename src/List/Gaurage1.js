import React from 'react'
import Car from './Car';

const Gaurage1 = () => {
    const cars=['ford','audi','bmw','mahindra']
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <Car  brand={car} />
        ))}
      </ul>
    </div>
  );
}

export default Gaurage1

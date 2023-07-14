import React from "react";
import {Bar} from 'react-chartjs-2';

const ChartBar =()=>{


  const data = {
    label: ["label 1", "label 2", "label 3", "label 4"],
    datasets: [
      {
        label: "data",
        data: [10, 20, 30, 50, 15],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return(
    <>
    <div className="chart-bar">

      <Bar
      data={data}
      options={{
        scales:{
          y:{
            beginAtZero:true
          }
        }
      }}
      
      />
    </div>
    
    </>
  )
}

export default ChartBar;
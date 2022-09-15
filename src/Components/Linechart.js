import React from 'react';
import { Line } from 'react-chartjs-2';
export default function LineChart() {
  const data = {
    labels: ['Mon','Tue','Wed','Thurs','Fri'],
    datasets: [
      {
        label: 'Time-in',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
       
        borderColor: 'rgba(54,162,235,1)',
      },
      {
        label: 'Time-out',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: 'rgba(232,99,132,1)',
      },
    ],
  };
  const options = {
    plugins: {
      
      title: {
        display: false,
        text: 'Time-in/out',
        color: 'blue',
        font: {
          size: 34,
        },
      
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}


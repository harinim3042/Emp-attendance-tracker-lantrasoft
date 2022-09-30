import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
const baseURL = 'http://localhost:4000/Dashboard/Working_hr_Leisure_hr_pw';

export default function LineChart() {
  const [item, setItem] = useState({
    id: 1,
    labels: ['Mon','Tue','Wed','Thurs','Fri'],
    datasets: [
      {
        label: 'Working Hour',
        data: [7,5,6,7.8,5],
        fill: false,
       
        borderColor: 'rgba(54,162,235,1)',
      },
      {
        label: 'Leisure hour',
        data: [1,3,2,0.2,3],
        fill: false,
        borderColor: 'rgba(232,99,132,1)',
      },
    ],
  })
  React.useEffect(() => {
    const datas_wh = [];
    const datas_lh =[];
    fetch(baseURL)
      .then((res) => res.json())
      .then(json => {
        console.log("json", json)
        json.map((x) => {
        
          datas_wh.push(x.Working_hours),
          datas_lh.push(x.Leisure_hours)
        })
      })  .catch((err) => console.log(err));

    setItem({
      id: 2,
      labels: ['Mon','Tue','Wed','Thurs','Fri'],
      datasets: [
        {
          label: 'Working Hour',
          data: datas_wh,
          fill: true,
         
          borderColor: 'rgba(54,162,235,1)',
        },
        {
          label: 'Leisure hour',
          data: datas_lh,
          fill: true,
          borderColor: 'rgba(232,99,132,1)',
        },
      ],
    })
    },[]);
  const options = {
    plugins: {
      
      title: {
        display: true,
        text: 'WH/LH Weekly Chart',
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
      <Line data={item} options={options} />
    </div>
  );
}


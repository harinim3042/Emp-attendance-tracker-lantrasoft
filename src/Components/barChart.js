import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
const baseURL = 'http://localhost:4000/Dashboard/Attendance';

function BarChart() {
  const [item, setItem] = useState({
    id: 1,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Aug','Sep'],
    datasets: [
      {
        label: ['Present'],
        data: [1,2,3,4,5,6,7,8,9],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
      {
        label: ['Absent'],
        data: [1,2,3,4,5,6,7,8,9],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(54,162,235,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      }
    ],
  })
  React.useEffect(() => {
    const datas_p = [];
    const datas_a =[];
    fetch(baseURL)
      .then((res) => res.json())
      .then(json => {
        console.log("json", json)
        json.map((x) => {
        
          datas_p.push(x.Present),
          datas_a.push(x.Absent)
        })
      })  .catch((err) => console.log(err));

    setItem({
      id: 2,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Aug','Sep'],
      datasets: [
        {
          label: ['Present'],
          data: datas_p,
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rgba(232,99,132,1)'],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
          backgroundImage:
            'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
        },
        {
          label: ['Absent'],
          data: datas_a,
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rgba(54,162,235,1)'],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
          backgroundImage:
            'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
        }
      ],
    })
  },[]);
  const options = {
    plugins: {
      title: {
        display: true,

        text: 'Monthly Attendance',
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
      <Bar options={options} data={item} />
    </div>
  );
}

export default BarChart;

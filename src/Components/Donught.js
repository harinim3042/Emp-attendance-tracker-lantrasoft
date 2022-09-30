import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
const baseURL = 'http://localhost:4000/Dashboard/Working_hr_Leisure_hr';

export default function DoughnutChart() {
  const [item, setItem] = useState({
    id: 1,
    labels: ['Working Hours', 'Leisure Hours'],
    datasets: [
      {
        
        label: 'WH/LH',
        data: [1, 1],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(54,162,235,1)', 'rgba(232,99,132,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  })

  React.useEffect(() => {
    const datas = [];
    fetch(baseURL)
      .then((res) => res.json())
      .then(json => {
        console.log("json", json)
        json.map((x) => {
          datas.push(x.Working_hours)
          datas.push(x.Leisure_hours)
        })
        setItem({
          labels: ['Working Hours', 'Leisure Hours'],
          datasets: [
            {
              id: 1,
              label: 'WH/LH',
              data: datas,
              borderColor: ['rgba(255,206,86,0.2)'],
              backgroundColor: ['rgba(54,162,235,1)', 'rgba(232,99,132,1)'],
              pointBackgroundColor: 'rgba(255,206,86,0.2)',
              backgroundImage:
                'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
            },
          ],
        })
      })  .catch((err) => console.log(err));

    
    

  }, []);

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'WH/LH Daily Chart',
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
      <Doughnut datasetIdKey='id' data={item} options={options} />
    </div>
  );
}

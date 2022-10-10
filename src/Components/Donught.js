import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const empId = userData['emp_id'];
  const baseURL = 'http://127.0.0.1:8000/getAnalyticsByIDandDate?EmpId=' + empId + '&date=2022-10-03';

 

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
     .then(x => {
   
       datas.push(x['workingHours'])
       datas.push(x['leisureHours'])
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
      // tooltip: {
      //   callbacks: {
      //             label: function(tooltipItem, data) {
                 
      //               return 'Time: '+ new Date(tooltipItem.yLabel*1000).toISOString().length(11, 5) 
      //             }
      //         }
      // },
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

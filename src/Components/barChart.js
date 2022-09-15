import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Aug','Sep','Oct','Nov', 'Dec'],
    datasets: [
      {
        label: ['Present'],
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(232,99,132,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
      {
        label: ['Absent'],
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: ['rgba(54,162,235,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      }
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,

        text: 'Attendance',
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
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {
  const data = {
    labels: ['Working Hours', 'Leisure Hours'],
    datasets: [
      {
        label: '',
        data: [1, 1],
        borderColor: ['rgba(255,206,86,0.2)'],
        backgroundColor: [ 'rgba(54,162,235,1)', 'rgba(232,99,132,1)'],
        pointBackgroundColor: 'rgba(255,206,86,0.2)',
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,
        text: 'Doughnut Chart',
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
      <Doughnut data={data} options={options} />
    </div>
  );
}

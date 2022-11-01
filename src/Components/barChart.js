import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const userData = JSON.parse(localStorage.getItem("userData"));

const BarChart = ({ empId = userData["emp_id"] }) => {
  const currentYear = new Date().getFullYear();


  const [item, setItem] = useState({
    id: 1,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Aug','Sep','Oct'],
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
    const datas_m = [];
    const datas_p = [];
    const datas_a =[];
const baseURL = 'http://127.0.0.1:8000/getYearlyAttendaceByID?EmpId=' + empId + '&y='+ currentYear +'';

    fetch(baseURL)
      .then((res) => res.json())
      .then(json => {
        console.log("json", json)
        json.map((x) => {
          datas_m.push(x.Month),
          datas_p.push(x.Present),
          datas_a.push(x.Absent)
        })
        setItem({
          id: 2,
          labels: datas_m,
          datasets: [
            {
              label: ['Present'],
              data: datas_p ,
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
      })  .catch((err) => console.log(err));


  },[empId]);
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` ${context.dataset.label} : ${context.formattedValue} days` 
            // return console.log(context)
          },
        }
      },
      title: {
        display: true,

        text: 'Yearly Attendance '+currentYear +'',
        color: "#cb8e50cf",

        font: {
          size: 24,
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

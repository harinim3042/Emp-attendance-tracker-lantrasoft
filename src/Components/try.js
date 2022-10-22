import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const userData = JSON.parse(localStorage.getItem("userData"));
// const empId = userData["emp_id"];
// const empId = 101;


const LineChart = ({ empId = userData['emp_id'] }) => {
  const [item, setItem] = useState({
    id: 1,
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
    datasets: [
      {
        label: "Working Hour",
        data: [7, 5, 6, 7.8, 5],
        fill: false,

        borderColor: "rgba(54,162,235,1)",
      },
      {
        label: "Leisure hour",
        data: [1, 3, 2, 0.2, 3],
        fill: false,
        borderColor: "rgba(232,99,132,1)",
      },
    ],
  });

  useEffect(() => {
    const datas_wh = [];
    const datas_lh =[];
    const date =[];
    const lbl_wh=[];
    const lbl_lh=[];
    const baseURL = "http://127.0.0.1:8000/getWeeklyData?EmpId=" + empId + "";

    fetch(baseURL)
      .then((res) => res.json())
      .then(json => {
        console.log("json", json)
        json.map((x) => {
          date.push(x.Date);
         lbl_wh.push(x["Working Hours"]),
         lbl_lh.push(x["Leisure Hours"])
          datas_wh.push(x.workingHours),
          datas_lh.push(x.leisureHours)
        })
        
        setItem({
          
          labels: date,
          datasets: [
            {
             
              label: "Working Hour" ,
              // label:lbl_wh,
              data:  datas_wh,
              fill: true,

              borderColor: "rgba(54,162,235,1)",
            },
            
       
              {
              label: "Leisure hour",
              data: datas_lh,
              fill: true,
              borderColor: "rgba(232,99,132,1)",
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  }, [empId]);

    
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const result = new Date(context.raw * 1000).toISOString().slice(11, 19);
               return `${        context.dataset.label          } : ${result}`;
            // return console.log(result);
          },
        }
      },
  
      title: {
        display: true,
        text: "Working Hours vs Leisure Hours Weekly ",
        color: "blue",
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
  scales: {
 
    y: {
       
    //   min: 0,
    //   max: 10000,
      ticks: {
        callback: function(value) {
            const result = new Date(value * 1000).toISOString().slice(11, 19);
            // return `${        context.dataset.label          } : ${result}`;
            return  result},   
        // stepSize: 3600
        stepSize: 60 * 60
      }
    }
  },
//   tooltips: {
//     callbacks: {
//       label: function(tooltipItem, data) {

//             return (tooltipItem.yLabel)
            
//         // return data.datasets[tooltipItem.datasetIndex].label + ': ' + epoch_to_hh_mm_ss(tooltipItem.yLabel)
//       }
//     }
//   },
 
  }


 
  return (
    <div>
      <Line data={item} options={options} />
    </div>
  );
};

export default LineChart;

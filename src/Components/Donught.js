import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const userData = JSON.parse(localStorage.getItem("userData"));
// const empId = 101;

const DoughnutChart = ({ empId = userData["emp_id"] }) => {
  const [item, setItem] = useState({
    id: 1,
    labels: ["Working Hours", "Leisure Hours"],
    datasets: [
      {
        label: "WH/LH",
        data: [1, 1],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgba(54,162,235,1)", "rgba(232,99,132,1)"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  });

  
  useEffect(() => {
    const baseURL =    'http://127.0.0.1:8000/getAnalyticsByID2?EmpId=' +    empId + ''; 
    const datas = [];
    const datas_lbl = [];
    const date = [];
    
    fetch(baseURL)
      .then((res) => res.json())
      .then((x) => {
        console.log("json", x)
        console.log("DonutDate", x.Date)
        const date = x.Date;

        const [year, month, day] = date.split('-');
        
        const result = [day,month,  year].join('/');
        datas_lbl.push(x["Working Hours"]);
        datas_lbl.push(x["Leisure Hours"]);
        datas.push(x["workingHours"]);
        datas.push(x["leisureHours"]);
        localStorage.setItem("DonutDate", result);
        setItem({
          labels: ["Working Hours", "Leisure Hours"],
          datasets: [
            {
              id: 1,
              labels: datas_lbl,
              data: datas,
              borderColor: ["rgba(255,206,86,0.2)"],
              backgroundColor: ["rgba(54,162,235,1)", "rgba(232,99,132,1)"],
              pointBackgroundColor: "rgba(255,206,86,0.2)",
              backgroundImage:
                'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
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
          label: function (context) {
            return `${context.label} : ${
              context.dataset.labels[context.dataIndex]
            }`;
            // return console.log(context);
          },
        },
      },
  

      title: {
        display: true,
        // text: "Working Hours vs Leisure Hours Daily ",
        text: ['Working Hours vs Leisure Hours',' Daily', localStorage.getItem("DonutDate")],
        color: "#cb8e50cf",

      
        font: {
          size: 22,
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
      <Doughnut datasetIdKey="id" data={item} options={options} />
    </div>
  );
};

export default DoughnutChart;

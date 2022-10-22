import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const userData = JSON.parse(localStorage.getItem("userData"));

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
    const baseURL =
    "http://127.0.0.1:8000/getAnalyticsByIDandDate?EmpId=" +
    empId +
    "&date=2022-10-03";
    const datas = [];
    const datas_lbl = [];
    fetch(baseURL)
      .then((res) => res.json())
      .then((x) => {
        console.log("json", x)

        datas_lbl.push(x["Working Hours"]);
        datas_lbl.push(x["Leisure Hours"]);
        datas.push(x["workingHours"]);
        datas.push(x["leisureHours"]);
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
        text: ['Working Hours vs','Leisure Hours Daily'],
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
  };

  return (
    <div>
      <Doughnut datasetIdKey="id" data={item} options={options} />
    </div>
  );
};

export default DoughnutChart;

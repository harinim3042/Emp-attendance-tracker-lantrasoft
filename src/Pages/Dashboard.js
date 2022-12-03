import React from 'react';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';
import BarNavigation from '../Components/Navbar.js';
import ClockTime from '../Components/DisplayClock.js';
export default function Dashboard() {
  const pageload = (event) => {
    //Prevent page reload
    event.preventDefault();};
  return (
    <div onLoad={pageload}>
      <BarNavigation />
      <h1 className="form-center white-font pt-5">MY DASHBOARD</h1>
      <div className=" text-align-right white-font mt-n10 me-3">< ClockTime /></div>
      <div className="chart-align container-fluid mt-2 mb-7 ">
        <div className="chart-bg donut px-5 mx-4 py-5 mb-2 ">
          <DoughnutChart />
        </div>
        <div className="chart-bg line px-6 mx-3 py-6 mb-2 ">
          <LineChart />
        </div>
        <div className="chart-bg bar px-7 py-6 my-4 ">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

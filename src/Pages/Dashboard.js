import React from 'react';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';
import BarNavigation from '../Components/Navbar.js';
import ClockTime from '../Components/DisplayClock.js';
export default function Dashboard() {
  const Username = JSON.parse(localStorage.getItem('user_Name'));
  return (
    <>
      <BarNavigation />
      <div className="chart-align mt-2 mb-n2">
      <div className="chart-bg px-1 mx-13 py-4 my-2">
      
    <h1>{Username}</h1>  </div>
      <div className="chart-bg px-1 mx-13 py-4 my-2">
      <ClockTime />
      </div>
      </div>
       <div className="chart-align my-9">
        <div className="chart-bg donut px-5 mx-3 py-4 my-2">
          <DoughnutChart />
        </div>
        <div className="chart-bg line px-5 mx-3 py-4 my-2">
          <LineChart />
        </div>
        <div className="chart-bg bar px-5 mx-3 py-4 my-2">
          <BarChart />
        </div>
      </div> 
    </>
  );
}

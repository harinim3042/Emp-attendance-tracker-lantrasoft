import React from 'react';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';
import SideBarNavigation from '../Components/Navbar.js';
import ClockTime from '../Components/DisplayClock.js';
export default function Dashboard() {
  return (
    <>
      <SideBarNavigation />
      <div className="chart-align mt-2 mb-n2">
      <div className="chart-bg px-1 mx-13 py-4 my-2">
      <ClockTime />
      </div>
      <div className="chart-bg px-1 mx-13 py-4 my-2">
      <ClockTime />
      </div>
      </div>
      <div className="chart-align my-9">
        <div className="chart-bg px-5 mx-3 py-4 my-2">
          <DoughnutChart />
        </div>
        <div className="chart-bg px-5 mx-3 py-4 my-2">
          <LineChart />
        </div>
        <div className="chart-bg px-5 mx-3 py-4 my-2">
          <BarChart />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';
import SideBarNavigation from '../Components/Navbar.js';
export default function Dashboard() {
  return (
    <>
      <SideBarNavigation />
      <div className="chart-bg px-1 mx-13 py-6 my-5"></div>
      <div className="chart-align my-9">
        <div className="chart-bg px-5 mx-3 py-6 my-5">
          <DoughnutChart />
        </div>
        <div className="chart-bg px-5 mx-3 py-13 my-5">
          <LineChart />
        </div>
        <div className="chart-bg px-5 mx-3 py-13 my-5">
          <BarChart />
        </div>
      </div>
    </>
  );
}

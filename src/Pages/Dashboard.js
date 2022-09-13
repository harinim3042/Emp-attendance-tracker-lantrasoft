import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';
import Button from 'react-bootstrap/Button';
export default function Dashboard() {
  return (
    <div className="chart-align">
      <div className="chart-bg px-5 mx-5 py-3 my-5">
        <DoughnutChart />
      </div>
      <div className="chart-bg px-5 mx-5 py-13 my-5">
        <LineChart />
      </div>
      <div className="chart-bg px-5 mx-5 py-13 my-5">
        <BarChart />
      </div>
      <Link to="LeaveApplication">Leave</Link>
   </div>

  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import DoughnutChart from '../Components/Donught.js';
import LineChart from '../Components/Linechart.js';
import BarChart from '../Components/barChart';

export default function HRDashboard() {
  return (
    <div className="chart-align ">
      <div className="chart-bg px-5 mx-5 py-6 my-5">
        <DoughnutChart />
      </div>
      <div className="chart-bg px-5 mx-5 py-13 my-5">
        <LineChart />
      </div>
      <div className="chart-bg px-5 mx-5 py-13 my-5">
        <BarChart />
      </div>
      <div className="form-center ">
        <Link to="LeaveApproval">Leave</Link>
      </div>
    </div>
  );
}

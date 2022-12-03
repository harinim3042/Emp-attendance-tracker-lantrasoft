import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import HRDashboard from "./Pages/HRDashboard";
import Login from "./Pages/Login";
import DayWiseLog from "./Pages/DayWiseLog";
import LeaveApplication from './Pages/LeaveApplication';
import LeaveApproval from './Pages/LeaveApproval';
import LeaveStatus from './Pages/LeaveStatus';
import Reports from "./Pages/Reports";
import AllLeaveList from "./Pages/AllLeaveList";

import EmployeeDetails from "./Pages/EmployeeDetails";
import ProfilePage from "./Pages/ProfilePage";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PointElement,
  LineElement,
  BarElement,
  LinearScale,
  CategoryScale
);

export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/HRDashboard" element={<HRDashboard />} />
            <Route path="/DayWiseLog" element={<DayWiseLog />} />
            <Route path="/LeaveApplication" element={<LeaveApplication />} />
            <Route path="/LeaveApproval" element={<LeaveApproval />} />
            <Route path="/LeaveStatus" element={<LeaveStatus />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
            <Route path="/AllLeaveList" element={<AllLeaveList />} />

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

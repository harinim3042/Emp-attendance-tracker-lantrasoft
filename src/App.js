import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import HRDashboard from './Pages/HRDashboard';
import LeaveApplication from './Pages/LeaveApplication';
import LeaveApproval from './Pages/LeaveApproval';
import LeaveStatus from './Pages/LeaveStatus';
import Login from './Pages/Login';

export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/HRDashboard" element={<HRDashboard />} />
            <Route path="/LeaveApplication" element={<LeaveApplication />} />
            <Route path="/LeaveApproval" element={<LeaveApproval />} />
            <Route path="/LeaveStatus" element={<LeaveStatus />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

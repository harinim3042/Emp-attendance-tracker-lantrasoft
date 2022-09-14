import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import HRDashboard from './Pages/HRDashboard';
import LeaveApplication from './Pages/LeaveApplication';
import LeaveApproval from './Pages/LeaveApproval';
import Login from './Components/Login';

export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/HRDashboard" element={<HRDashboard />} />
            <Route path="/LeaveApplication" element={<LeaveApplication />} />
            <Route path="/LeaveApproval" element={<LeaveApproval />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

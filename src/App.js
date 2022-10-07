import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Reports from './Pages/Reports';

import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, BarElement ,LineElement,Tooltip, Legend, Title  } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Title, PointElement, LineElement, BarElement, LinearScale, CategoryScale);

export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Reports" element={<Reports />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

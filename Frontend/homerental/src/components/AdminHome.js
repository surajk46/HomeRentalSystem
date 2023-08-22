import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeFunc from './HomeFunc';

export default function AdminHome() {
  return (
    <div>
      <h1>Welcome To Admin Home Page</h1>
      <ul className="nav navbar">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link">Log Out</Link>
        </li>
        <li className="nav-item">
          <Link to="/tenantinfo" className="nav-link">Tenants Information</Link>
        </li>
        <li className="nav-item">
          <Link to="/ownerinfo" className="nav-link">Owners Information</Link>
        </li>
        <li className="nav-item">
          <Link to="/propertyinfo" className="nav-link">Properties Information</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<HomeFunc />} />
      </Routes>
    </div>
  );
}

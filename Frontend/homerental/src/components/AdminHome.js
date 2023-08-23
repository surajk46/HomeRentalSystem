import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';




export default function AdminHome() {
  return (

    <div className='nav-item'>
      <h1>Welcome To AdminHome</h1>
      <ul className="nav navbar">
        <li className="nav-item">
          <Link to="/ShowAllTenant" className="nav-link">ShowAllTenant</Link>
        </li>
        <li className="nav-item">
          <Link to="/showallpropreties" className="nav-link">ShowAllOwner</Link>
        </li>
        <li className="nav-item">
          <Link to="/showallproperties" className="nav-link">ShowAllproperties</Link></li>
      </ul>
    </div>
  );
}
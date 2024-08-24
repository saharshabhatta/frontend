import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'; 

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === '/students' ? 'active' : ''}>
          <Link to="/students">📋 Student Record</Link>
        </li>
        <li className={location.pathname === '/assignment' ? 'active' : ''}>
          <Link to="/assignment">Assignment</Link>
        </li>
        <li className={location.pathname === '/result' ? 'active' : ''}>
          <Link to="/result">Result</Link>
        </li>
        <li className={location.pathname === '/staff' ? 'active' : ''}>
          <Link to="/staff">Staff Record</Link>
        </li>
        <li className={location.pathname === '/module' ? 'active' : ''}>
          <Link to="/module">Module Record</Link>
        </li>
        <li className={location.pathname === '/course' ? 'active' : ''}>
          <Link to="/course">Course Record</Link>
        </li>
        <li className={location.pathname === '/archive' ? 'active' : ''}>
          <Link to="/archive">Archive</Link>
        </li>
        <li className={location.pathname === '/logout' ? 'active' : ''}>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
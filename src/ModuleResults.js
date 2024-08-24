import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; 

const ModuleResults = () => {
  const modules = [
    { id: '23834894', level: 'L4', course: 'BSc Computing', grade: 'A', gpa: '3.8' },
    { id: '23834863', level: 'L5', course: 'BBA', grade: 'B+', gpa: '3.4' },
    { id: '23834818', level: 'L6', course: 'BSc Environment Science', grade: 'A-', gpa: '3.7' },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Results</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
            <Link to="/add-result">
              <button 
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  backgroundColor: '#50BC82',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  width: '150px'
                }}
              >
                Add New Result
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>UN ID</th>
                <th>Level</th>
                <th>Course</th>
                <th>Grade</th>
                <th>GPA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index}>
                  <td>{module.id}</td>
                  <td>{module.level}</td>
                  <td>{module.course}</td>
                  <td>{module.grade}</td>
                  <td>{module.gpa}</td>
                  <td>
                    <button className="archive">Archive</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModuleResults;

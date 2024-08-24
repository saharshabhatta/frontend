import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; 

const AssignmentRecords = () => {
  const assignments = [
    { course: 'BSc Computing', dueDate: '2024-08-20', status: 'Submitted', marks: '85', feedback: 'Good job!' },
    { course: 'BBA', dueDate: '2024-08-25', status: 'Not Submitted', marks: '-', feedback: '-' },
    { course: 'BSc Environment Science', dueDate: '2024-08-30', status: 'Graded', marks: '90', feedback: 'Excellent work!' },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Assignment Records</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
            <Link to="/add-assignment">
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
                Add New Assignmnet
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Marks</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.course}</td>
                  <td>{assignment.dueDate}</td>
                  <td>{assignment.status}</td>
                  <td>{assignment.marks}</td>
                  <td>{assignment.feedback}</td>
                  <td>
                  <Link to="/edit-assignment" className="edit">
                    <button className="edit">Edit</button>
                  </Link>
                    <button className="delete">Delete</button>
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

export default AssignmentRecords;

import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; 


const StudentRecords = () => {
  const students = [
    { id: '23834894', name: 'James Smith', level: 'L4', course: 'BSc Computing', dob: '2001-03-12', gender: 'Male' },
    { id: '23834863', name: 'Emily Johnson', level: 'L5', course: 'BBA', dob: '2002-07-25', gender: 'Female' },
    { id: '23834818', name: 'Olivia Williams', level: 'L6', course: 'BSc Environment Science', dob: '2003-09-05', gender: 'Female' },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Student Records</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
            <Link to="/add-student">
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
                Add New Student
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>UN ID</th>
                <th>Name</th>
                <th>Level</th>
                <th>Course</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.course}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>
                  <Link to="/edit-student" className="edit">
                    <button className="edit">Edit</button>
                  </Link>
                    <button className="archive">Archive</button>
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

export default StudentRecords;

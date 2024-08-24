import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';    

const StaffRecords = () => {
  const staff = [
    { id: '11223344', name: 'John Doe', phoneNumber: '123-456-7890', jobTitle: 'Professor', department: 'Computer Science', type: 'Full-Time' },
    { id: '22334455', name: 'Jane Smith', phoneNumber: '098-765-4321', jobTitle: 'Administrator', department: 'Administration', type: 'Part-Time' },
    { id: '33445566', name: 'Michael Brown', phoneNumber: '555-555-5555', jobTitle: 'Lecturer', department: 'Environmental Science', type: 'Full-Time' },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <nav className="nav">
          WUC
        </nav>
        <div className="records">
          <h2>Staff Records</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
            <Link to="/add-staff">
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
                Add New Staff
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Staff ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Job Title</th>
                <th>Department</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((staffMember, index) => (
                <tr key={index}>
                  <td>{staffMember.id}</td>
                  <td>{staffMember.name}</td>
                  <td>{staffMember.phoneNumber}</td>
                  <td>{staffMember.jobTitle}</td>
                  <td>{staffMember.department}</td>
                  <td>{staffMember.type}</td>
                  <td>
                  <Link to="/edit-staff" className="edit">
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

export default StaffRecords;

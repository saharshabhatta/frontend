import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponent from './Login';
import Sidebar from './Sidebar';
import StudentRecords from './StudentRecords';
import StaffRecord from './StaffRecord';
import CourseRecord from './CourseRecord';
import ModuleResults from './ModuleResults';
import ModuleRecord from './ModuleRecord';
import AssignmentRecords from './AssignmentRecords'; 
import AddStudentForm from './AddStudentForm'; 
import AddAssignmentForm from './AddAssignmentForm'; 
import AddStaffForm from './AddStaffForm';
import AddModuleForm from './AddModuleForm';
import AddCourseForm from './AddCourseForm';
import AddResultForm from './AddResultForm';
import ArchiveRecords from './ArchiveRecords';
import EditAssignmentForm from './EditAssignmentForm'; 
import EditCourseForm from './EditCourseForm';
import EditModuleForm from './EditModuleForm';
import EditResultForm from './EditResultForm';
import EditStaffForm from './EditStaffForm';
import EditStudentForm from './EditStudentForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Render Sidebar only on routes other than /login */}
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/*"
            element={
              <>
                <Sidebar />
                <Routes>
                  <Route path="/students" element={<StudentRecords />} />
                  <Route path="/staff" element={<StaffRecord />} />
                  <Route path="/result" element={<ModuleResults />} />
                  <Route path="/course" element={<CourseRecord />} />
                  <Route path="/module" element={<ModuleRecord />} />
                  <Route path="/assignment" element={<AssignmentRecords />} />
                  <Route path="/add-student" element={<AddStudentForm />} />
                  <Route path="/edit-student" element={<EditStudentForm />} />
                  <Route path="/add-assignment" element={<AddAssignmentForm />} />
                  <Route path="/edit-assignment" element={<EditAssignmentForm />} />
                  <Route path="/add-staff" element={<AddStaffForm />} />
                  <Route path="/edit-staff" element={<EditStaffForm />} />
                  <Route path="/add-module" element={<AddModuleForm />} />
                  <Route path="/edit-module" element={<EditModuleForm />} />
                  <Route path="/add-course" element={<AddCourseForm />} />
                  <Route path="/edit-course" element={<EditCourseForm />} />
                  <Route path="/add-result" element={<AddResultForm />} />
                  <Route path="/edit-result" element={<EditResultForm />} />
                  <Route path="/archive" element={<ArchiveRecords />} />
                  {/* Redirect root path to /login */}
                  <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

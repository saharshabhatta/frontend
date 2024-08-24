import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import Sidebar from './Sidebar';  
import './CourseRecord.css';  

const courses = [  
    { id: 1, name: "Bsc Computing - CSY1023", lecturer: "Nischal Khadka" },  
    { id: 2, name: "BBA - CSY2022", lecturer: "Nischal Khadka" },  
    { id: 3, name: "Bsc Environment - CSY3002", lecturer: "Nischal Khadka" },  
];  

const CourseRecord = () => {  
    const [searchTerm, setSearchTerm] = useState("");  

    const filteredCourses = courses.filter(course =>   
        course.name.toLowerCase().includes(searchTerm.toLowerCase())  
    );  

    return (  
        <div className="app">  
            <Sidebar />  
            <div className="content">  
                <nav className="nav">WUC</nav>  
                <div className="records">  
                    <h2>Course Record</h2>  
                    <div className="search-bar">  
                        <input   
                            type="text"   
                            placeholder="Search..."   
                            value={searchTerm}   
                            onChange={(e) => setSearchTerm(e.target.value)}   
                        />  
                        <button>🔍</button>  
                        <Link to="/add-Course">  
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
                                Add New Course  
                            </button>  
                        </Link>  
                    </div>  
                    <div className="three-column-container">  
                        {filteredCourses.map(course => (  
                            <div className="box" key={course.id}>  
                                <h3>{course.name}</h3>  
                                <p>Lecturer: <br/>{course.lecturer}</p>  
                            </div>  
                        ))}  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default CourseRecord;
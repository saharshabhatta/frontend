import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import Sidebar from './Sidebar';  
import './ModuleRecord.css';  

const ModuleRecord = () => {  
    const [searchTerm, setSearchTerm] = useState('');  
    const [modules] = useState([  
        { id: 1, title: "Database 1 - CSY1038", lecturer: "Ankit Thapa" },  
        { id: 2, title: "Web Development 1 - CSY1040", lecturer: "Ankit Thapa" },  
        { id: 3, title: "Computer Communication 1 - CSY1048", lecturer: "Ankit Thapa" },  
        { id: 4, title: "Software Engineering 1 - CSY1050", lecturer: "Ankit Thapa" },  
    ]);  

    const [filteredModules, setFilteredModules] = useState(modules);  

    const handleSearchChange = (e) => {  
        setSearchTerm(e.target.value);  
    };  

    const handleSearch = () => {  
        const results = modules.filter(module =>  
            module.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredModules(results);
    };

    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <nav className="nav"> WUC </nav>
                <div className="records">
                    <h2>Module Record</h2>
                    <div className="search-bar">
                        <label htmlFor="search-input" style={{ display: 'none' }}>Search</label>
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button onClick={handleSearch} aria-label="Search">
                            🔍  
                        </button>
                        <Link to="/add-Module">
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
                                Add New Module
                            </button>
                        </Link>
                    </div>
                    <div className="boxes-container">
                        {filteredModules.length > 0 ? (
                            filteredModules.map(module => (
                                <div className="boxes" key={module.id}>
                                    <h2>{module.title}</h2>
                                    <hr className="heading-line" />
                                    <h4>Overview:</h4>
                                    <p>Lecturer: {module.lecturer}</p>
                                </div>
                            ))
                        ) : (
                            <p>No modules found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleRecord;
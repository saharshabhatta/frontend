import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginComponent = () => {
    return (
        <div className="login-container">
          <div className="header">
                    <span className="title">WUC</span>
                </div>
            <div className="login-box">
                
                <div className="login-content">
                    <h2 className="system-title">NILE RECORD MANAGEMENT SYSTEM</h2>
                    <form className="login-form">
                        <input type="text" placeholder="Enter Username" className="input-field" />
                        <div className="password-field">
                            <input type="password" placeholder="Enter Password" className="input-field" />
                           
                        </div>
                        <div className="options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                        <Link to="/dashboard" className="login-button">
                            <button type="submit" className="login-button">LOGIN</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;

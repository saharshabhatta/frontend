import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="find-us">
                <h2>FIND US</h2>
                <div className="location">
                    <span role="img" aria-label="location">📍</span>
                    <p>Our location</p>
                    <p>---</p>
                </div>
                <div className="contact">
                    <span role="img" aria-label="phone">📞</span>
                    <p>Contact Us</p>
                    <p>---</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Contact With Us</h2>
                <form>
                    <div className="input-container">
                        <input type="text" id="name" required />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="input-container">
                        <input type="email" id="email" required />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="phone" required />
                        <label htmlFor="phone">Your Phone Number</label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="message" rows="4" required />
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;

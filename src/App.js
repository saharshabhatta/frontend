import React from 'react';
import NewsBlogSection from './NewsBlogSection';
import TestimonialCarousel from './TestimonialCarousel';
import ContactUs from './ContactUs';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <NewsBlogSection />
        <div className="vertical-line"></div>
        <TestimonialCarousel />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './BlogItem.css'; // CSS for blog item

const BlogItem = ({ title, location, date, time, description, imageUrl }) => {
  return (
    <div className="blog-item">
      <img src={imageUrl} alt={title} className="blog-image" />
      <h3>{title}</h3>
      <p><strong>{location}</strong></p>
      <p><strong>{date}</strong> | <strong>{time}</strong></p>
      <p>{description}</p>
    </div>
  );
};

export default BlogItem;

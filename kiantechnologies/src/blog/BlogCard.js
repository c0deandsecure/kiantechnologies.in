// src/components/blog/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  
  const imageUrl = post.image;
  const excerpt = post.excerpt || (post.content ? 
    post.content.substring(0, 150) + '...' : 
    'No excerpt available.'
  );
  
  const postDate = post.createdAt ? formatDate(post.createdAt) : 'No Date';

  const [day, monthYear] = postDate.split(' ', 2); // Split once to get day and rest of string

  return (
    <div className="blog-card">
      {imageUrl && (
        <div className="blog-card-image-container">
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="blog-card-image" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'; 
              e.target.onerror = null; 
              e.target.style.display = 'block'; 
            }}
          />
          <div className="blog-card-overlay">
            <div className="blog-overlay-date">
              <span className="overlay-day">{day}</span>
              <span className="overlay-month-year">{monthYear}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        
        {/* --- CRITICAL CORRECTION: Change the 'to' prop here --- */}
        {/* It MUST be a relative path, not a full URL to the backend API. */}
        <Link 
          to={`/blog/post/${post.slug}`} // CORRECTED: Removed "http://localhost:5000/api/blog"
          className="read-more-button"
        >
          Read More &gt;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
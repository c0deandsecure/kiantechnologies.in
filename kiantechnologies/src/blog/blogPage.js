// src/components/blog/blogPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import './BlogPages.css';

const BlogPages = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/blog/');
        setBlogPosts(response.data);
        setTotalPages(Math.ceil(response.data.length / postsPerPage));
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err.response?.data?.message || 'Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render page numbers
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 4;
    
    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > maxVisible - 1) {
        pages.push('...');
      }
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= maxVisible - 1) {
        end = maxVisible;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - (maxVisible - 1);
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages.map((page, index) => (
      page === '...' ? 
        <span key={`ellipsis-${index}`} className="ellipsis">...</span> :
        <button
          key={page}
          className={`page-number ${currentPage === page ? 'active' : ''}`}
          onClick={() => paginate(page)}
        >
          {page.toString().padStart(2, '0')}
        </button>
    ));
  };

  if (loading) {
    return (
      <div className="blog-pages-container loading-state">
        <div className="spinner"></div>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-pages-container error-state">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
        <button 
          className="retry-btn"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="blog-pages-container">
      <h2 className="blog-section-title">Our Latest Insights</h2>
      
      {currentPosts.length === 0 ? (
        <div className="no-blogs-message">
          <p>No blog posts published yet. Check back soon!</p>
        </div>
      ) : (
        <>
          <div className="blog-cards-grid">
            {currentPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="nav-btn prev"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                PREV
              </button>
              
              <div className="page-numbers">
                {renderPageNumbers()}
              </div>
              
              <button 
                className="nav-btn next"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                NEXT
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPages;
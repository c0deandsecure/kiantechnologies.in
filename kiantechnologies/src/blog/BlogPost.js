import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/post/${slug}`);
        setPost(response.data);
      } catch (err) {
        setError('Failed to load the blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  if (loading) {
    return <div className="blog-post-loading">Loading...</div>;
  }

  if (error) {
    return <div className="blog-post-error">{error}</div>;
  }

  if (!post) {
    return <div className="blog-post-not-found">Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>
      </div>

      {post.image && (
        <div className="post-image-container">
          <img 
            src={post.image} 
            alt={post.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
            }}
          />
        </div>
      )}

      <div 
        className="post-content" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      {post.tags && post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="back-to-blog">
        <Link to="/blog">&larr; Back to Blog</Link>
      </div>
      
    </div>
  );
};

export default BlogPost;
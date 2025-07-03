import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminAuthContext } from './AdminApp';
import axios from 'axios';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEye, FaCalendarAlt, FaUser, FaSpinner } from 'react-icons/fa';
import './BlogManagement.css';

function BlogManagement() {
  const { admin } = useContext(AdminAuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog/admin-posts', {
          headers: {
            Authorization: `Bearer ${admin.token}`
          }
        });
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [admin]);

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/blog/${postToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`
        }
      });
      setPosts(posts.filter(post => post._id !== postToDelete._id));
      setShowDeleteModal(false);
      setPostToDelete(null);
    } catch (err) {
      console.error('Delete failed:', err);
      setError('Failed to delete blog post');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'published') return matchesSearch && post.isPublished;
    if (filterStatus === 'draft') return matchesSearch && !post.isPublished;
    return true;
  });

  if (loading) {
    return (
      <div className="blog-management-container">
        <div className="loading-container">
          <FaSpinner className="spinner-icon" />
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-management-container">
        <div className="error-alert">
          <div className="alert-icon">!</div>
          <div>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-management-container">
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete the post "{postToDelete?.title}"?</p>
            <p className="warning">This action cannot be undone.</p>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                className="delete-btn"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="page-header">
        <div className="header-content">
          <h1>Blog Management</h1>
          <Link to="/admin/blog/create" className="create-btn">
            <FaPlus className="btn-icon" />
            New Post
          </Link>
        </div>
        <p>Manage all blog posts, create new content, and track published status</p>
      </div>

      <div className="controls-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-container">
          <label>Status:</label>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Posts</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-value">{posts.length}</span>
            <span className="stat-label">Total Posts</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{posts.filter(p => p.isPublished).length}</span>
            <span className="stat-label">Published</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{posts.filter(p => !p.isPublished).length}</span>
            <span className="stat-label">Drafts</span>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="desktop-table">
        <table className="posts-table">
          <thead>
            <tr>
              <th className="title-col">Title</th>
              <th className="author-col">Author</th>
              <th className="status-col">Status</th>
              <th className="date-col">Date</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post._id}>
                <td className="title-cell">
                  <div className="post-title">{post.title}</div>
                  <div className="post-excerpt">{post.excerpt || post.content.substring(0, 100) + '...'}</div>
                </td>
                <td className="author-cell">
                  <FaUser className="author-icon" />
                  {post.author}
                </td>
                <td className="status-cell">
                  <span className={`status-badge ${post.isPublished ? 'published' : 'draft'}`}>
                    {post.isPublished ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="date-cell">
                  <FaCalendarAlt className="date-icon" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="actions-cell">
                  <Link 
                    to={`/admin/blog/edit/${post._id}`}
                    className="action-btn edit-btn"
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button 
                    onClick={() => handleDeleteClick(post)}
                    className="action-btn delete-btn"
                  >
                    <FaTrash /> Delete
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-cards">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post._id}>
            <div className="card-header">
              <h3 className="card-title">{post.title}</h3>
              <span className={`status-badge ${post.isPublished ? 'published' : 'draft'}`}>
                {post.isPublished ? 'Published' : 'Draft'}
              </span>
            </div>
            
            <div className="card-meta">
              <div className="meta-item">
                <FaUser className="meta-icon" />
                {post.author}
              </div>
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
            
            <div className="card-excerpt">
              {post.excerpt || post.content.substring(0, 120) + '...'}
            </div>
            
            <div className="card-actions">
              <Link 
                to={`/admin/blog/edit/${post._id}`}
                className="action-btn edit-btn"
              >
                <FaEdit /> Edit
              </Link>
              <button 
                onClick={() => handleDeleteClick(post)}
                className="action-btn delete-btn"
              >
                <FaTrash /> Delete
              </button>
              
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && !loading && (
        <div className="no-results">
          <div className="no-results-icon">📝</div>
          <h3>No blog posts found</h3>
          <p>Try adjusting your search or create a new post</p>
        </div>
      )}
    </div>
  );
}

export default BlogManagement;
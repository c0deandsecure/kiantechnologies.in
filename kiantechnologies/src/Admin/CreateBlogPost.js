import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from './AdminApp';
import axios from 'axios';
import { FaSpinner, FaSave, FaTimes, FaUpload, FaEye } from 'react-icons/fa';
import './CreateBlogPost.css'; // Import the dedicated CSS file

function CreateBlogPost() {
  const { admin } = useContext(AdminAuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: admin?.username || 'Admin', // Default to 'Admin' if username is not available
    isPublished: false,
    tags: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle image file selection and create preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click when image preview area is clicked
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      const formPayload = new FormData();
      formPayload.append('title', formData.title);
      formPayload.append('content', formData.content);
      formPayload.append('author', formData.author);
      formPayload.append('isPublished', formData.isPublished);
      formPayload.append('tags', formData.tags);
      if (image) formPayload.append('image', image);
      
      const response = await axios.post('http://localhost:5000/api/blog', formPayload, {
        headers: {
          Authorization: admin?.token ? `Bearer ${admin.token}` : '', // Ensure token exists
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('Blog post created:', response.data); // Log success data
      setSuccess(true);
      
      // Clear form after successful submission
      setFormData({
        title: '',
        content: '',
        author: admin?.username || 'Admin',
        isPublished: false,
        tags: ''
      });
      setImage(null);
      setImagePreview(null);

      setTimeout(() => {
        navigate('/admin/blog'); // Redirect after a short delay
      }, 1500);
    } catch (err) {
      console.error('Error creating blog post:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to create blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-page"> {/* Main container */}
      <div className="form-header">
        <h1>Create New Blog Post</h1>
        <p>Fill in the details below to create a new blog post.</p>
      </div>
      
      <div className="form-wrapper"> {/* Wrapper for the form content */}
        {error && (
          <div className="form-message form-error">
            <div className="message-icon">!</div>
            <div>{error}</div>
          </div>
        )}
        
        {success && (
          <div className="form-message form-success">
            <div className="message-icon">✓</div>
            <div>Blog post created successfully! Redirecting...</div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-grid">
            {/* Main content area (left side) */}
            <div className="form-section main-content-section">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a compelling title"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  rows="10"
                  required
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog content here..."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Add relevant tags (comma separated)"
                />
              </div>
            </div>
            
            {/* Sidebar content (right side) */}
            <div className="form-section sidebar-section">
              <div className="form-group image-upload-group">
                <label>Featured Image</label>
                <div 
                  className="image-preview-container"
                  onClick={handleImageClick}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="image-preview-img" />
                  ) : (
                    <div className="upload-placeholder">
                      <FaUpload className="upload-icon" />
                      <span>Click to upload image</span>
                      <span className="upload-hint">Recommended size: 1200x630px</span>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden-file-input" // Hidden input for file selection
                />
              </div>
              
              <div className="form-group publish-settings-group">
                <label>Publish Settings</label>
                <div className="toggle-switch">
                  <input
                    id="isPublished"
                    name="isPublished"
                    type="checkbox"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="toggle-checkbox"
                  />
                  <label htmlFor="isPublished" className="toggle-label">
                    <span className="toggle-handle"></span>
                  </label>
                  <span className="toggle-text">
                    {formData.isPublished ? 'Publish immediately' : 'Save as draft'}
                  </span>
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="form-group preview-box-group">
                <div className="preview-box">
                  <div className="preview-header">
                    <FaEye className="preview-icon" />
                    <h3>Preview</h3>
                  </div>
                  <div className="preview-content">
                    <div className="preview-title">{formData.title || 'Your title will appear here'}</div>
                    <div className="preview-date">
                      Published on {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="preview-excerpt">
                      {formData.content 
                        ? formData.content.substring(0, 150) + (formData.content.length > 150 ? '...' : '') 
                        : 'Your content will appear here...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button
              type="submit"
              disabled={loading}
              className="action-button submit-button"
            >
              {loading ? (
                <FaSpinner className="icon spinner-icon" />
              ) : (
                <FaSave className="icon" />
              )}
              {loading ? 'Creating...' : 'Create Post'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/blog')}
              className="action-button cancel-button"
            >
              <FaTimes className="icon" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogPost;
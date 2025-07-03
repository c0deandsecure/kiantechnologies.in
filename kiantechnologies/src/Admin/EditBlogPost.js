// src/Admin/EditBlogPost.js
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from './AdminApp';
import axios from 'axios';
import { FaSpinner, FaSave, FaTimes, FaUpload, FaEye } from 'react-icons/fa'; // Importing icons
import './EditBlogPost.css'; // Import the dedicated CSS file

function EditBlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { admin } = useContext(AdminAuthContext);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: admin?.username || 'Admin', // Default to admin username or 'Admin'
    isPublished: false,
    tags: '',
    currentImageUrl: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For new image preview
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    const fetchPost = async () => {
      if (!admin?.token) {
        setError('Authentication required. Please log in.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/admin-posts/${id}`, {
          headers: {
            Authorization: `Bearer ${admin.token}`
          }
        });
        
        const post = response.data;
        setFormData({
          title: post.title,
          content: post.content,
          author: post.author,
          isPublished: post.isPublished,
          tags: post.tags.join(', '), // Convert array to comma-separated string
          currentImageUrl: post.image // URL of the existing image
        });
        // Set initial image preview if there's a current image
        setImagePreview(post.image);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch blog post.');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, admin]); // Depend on id and admin context

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create preview for new image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // If user clears selection, revert to current image or clear preview
      setImage(null);
      setImagePreview(formData.currentImageUrl); // Revert to old image preview if no new file
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess(false); // Reset success state

    if (!admin?.token) {
      setError('Authentication required. Please log in to update.');
      setSaving(false);
      return;
    }
    
    try {
      const formPayload = new FormData();
      formPayload.append('title', formData.title);
      formPayload.append('content', formData.content);
      formPayload.append('author', formData.author);
      formPayload.append('isPublished', formData.isPublished);
      formPayload.append('tags', formData.tags);
      // Only append currentImageUrl if no new image is selected
      if (!image && formData.currentImageUrl) {
        formPayload.append('currentImageUrl', formData.currentImageUrl);
      }
      if (image) {
        formPayload.append('image', image);
      }
      
      const response = await axios.put(`http://localhost:5000/api/blog/${id}`, formPayload, {
        headers: {
          Authorization: `Bearer ${admin.token}`,
          'Content-Type': 'multipart/form-data' // Important for FormData
        }
      });
      
      console.log('Blog post updated:', response.data);
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/blog'); // Redirect on success
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update blog post.');
      console.error('Error updating blog post:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="edit-blog-loading-message">Loading blog post...</div>;
  if (error && !saving) return <div className="edit-blog-error-message">{error}</div>; // Only show error if not saving

  return (
    <div className="edit-blog-page">
      <div className="form-header">
        <h1>Edit Blog Post</h1>
        <p>Modify the details below to update your blog post.</p>
      </div>

      <div className="form-wrapper">
        {error && saving === false && ( // Show error if it exists and not currently saving (e.g., initial fetch error)
          <div className="form-message form-error">
            <div className="message-icon">!</div>
            <div>{error}</div>
          </div>
        )}
        {success && (
          <div className="form-message form-success">
            <div className="message-icon">✓</div>
            <div>Blog post updated successfully! Redirecting...</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-grid">
            {/* Main content area */}
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
            
            {/* Sidebar content */}
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
                  className="hidden-file-input"
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
                    {formData.isPublished ? 'Published' : 'Draft'}
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
                      {formData.isPublished ? 'Published on ' + new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Status: Draft'}
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
              disabled={saving}
              className="action-button submit-button"
            >
              {saving ? (
                <FaSpinner className="icon spinner-icon" />
              ) : (
                <FaSave className="icon" />
              )}
              {saving ? 'Saving...' : 'Save Changes'}
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

export default EditBlogPost;
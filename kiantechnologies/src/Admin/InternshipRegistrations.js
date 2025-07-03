// src/Admin/InternshipRegistrations.js
import React, { useState, useEffect, useContext } from 'react';
import { AdminAuthContext } from './AdminApp';
import axios from 'axios';
import { FaTrash, FaEye } from 'react-icons/fa'; // Importing icons for delete and view CV
import './InternshipRegistrations.css'; // Import the dedicated CSS file

function InternshipRegistrations() {
  const { admin } = useContext(AdminAuthContext);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!admin?.token) {
        setError('Admin not authenticated. Please log in.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/registration/admin-registrations', {
          headers: {
            Authorization: `Bearer ${admin.token}`
          }
        });
        setRegistrations(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch internship registrations.');
        console.error('Error fetching registrations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [admin]);

  const deleteRegistration = async (id) => {
    if (!window.confirm('Are you sure you want to delete this registration? This action cannot be undone.')) return;
    
    if (!admin?.token) {
      alert('Admin not authenticated. Cannot delete registration.');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/registration/admin-registrations/${id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`
        }
      });
      setRegistrations(registrations.filter(reg => reg._id !== id));
      alert('Registration deleted successfully!');
    } catch (err) {
      console.error('Delete failed:', err);
      alert(err.response?.data?.message || 'Failed to delete registration.');
    }
  };

  if (loading) return <div className="internship-loading-message">Loading internship registrations...</div>;
  if (error) return <div className="internship-error-message">{error}</div>;

  return (
    <div className="internship-page-container">
      <div className="internship-content-wrapper">
        <h2 className="internship-heading">Internship Registrations</h2>
        
        {registrations.length === 0 ? (
          <div className="internship-no-data-message">
            No internship registrations found.
          </div>
        ) : (
          <div className="internship-table-wrapper">
            <table className="internship-registrations-table">
              <thead>
                <tr>
                  <th className="table-header-cell">Name</th>
                  <th className="table-header-cell">Email</th>
                  <th className="table-header-cell">Phone</th>
                  <th className="table-header-cell">Domain</th>
                  <th className="table-header-cell">Registered On</th>
                  <th className="table-header-cell actions-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration) => (
                  <tr key={registration._id} className="table-body-row">
                    <td className="table-data-cell name-cell">{registration.name}</td>
                    <td className="table-data-cell email-cell">{registration.email}</td>
                    <td className="table-data-cell phone-cell">{registration.phone}</td>
                    <td className="table-data-cell domain-cell">{registration.domain}</td>
                    <td className="table-data-cell date-cell">
                      {new Date(registration.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                      })}
                    </td>
                    <td className="table-data-cell actions-cell">
                      {registration.cv && (
                        <a 
                          href={registration.cv} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-cv-button"
                          title="View CV"
                        >
                          <FaEye className="button-icon" /> View CV
                        </a>
                      )}
                      <button
                        onClick={() => deleteRegistration(registration._id)}
                        className="delete-button"
                        title="Delete Registration"
                      >
                        <FaTrash className="button-icon" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default InternshipRegistrations;
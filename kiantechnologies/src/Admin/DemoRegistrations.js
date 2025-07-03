// src/Admin/DemoRegistrations.js
import React, { useState, useEffect, useContext } from 'react';
import { AdminAuthContext } from './AdminApp';
import axios from 'axios';
import './DemoRegistrations.css'; // Import the custom CSS file

function DemoRegistrations() {
  const { admin } = useContext(AdminAuthContext);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!admin?.token) {
        setError('Admin not authenticated.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/demo/admin-registrations', {
          headers: {
            Authorization: `Bearer ${admin.token}`
          }
        });
        setRegistrations(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch demo registrations.');
        console.error("Error fetching registrations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [admin]);

  const deleteRegistration = async (id) => {
    if (!window.confirm('Are you sure you want to delete this request?')) return;
    if (!admin?.token) {
        alert('Admin not authenticated. Cannot delete.');
        return;
    }
    
    try {
      await axios.delete(`http://localhost:5000/api/demo/admin-registrations/${id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`
        }
      });
      setRegistrations(registrations.filter(reg => reg._id !== id));
      alert('Request deleted successfully!');
    } catch (err) {
      console.error('Delete failed:', err);
      alert(err.response?.data?.message || 'Failed to delete request.');
    }
  };

  if (loading) return <div className="demo-loading-message">Loading demo registrations...</div>;
  if (error) return <div className="demo-error-message">{error}</div>;

  return (
    <div className="demo-registrations-page">
      <div className="demo-registrations-container">
        <h2 className="demo-registrations-heading">
          Demo Session Requests
        </h2>
        
        {registrations.length === 0 ? (
          <div className="demo-no-data-message">
            No demo session requests found.
          </div>
        ) : (
          <div className="demo-table-wrapper">
            <table className="demo-registrations-table">
              <thead>
                <tr>
                  <th className="table-header-cell">Name</th>
                  <th className="table-header-cell">Email</th>
                  <th className="table-header-cell">Phone</th>
                  <th className="table-header-cell">Course</th>
                  <th className="table-header-cell">Date</th>
                  <th className="table-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration) => (
                  <tr key={registration._id} className="table-body-row">
                    <td className="table-data-cell name-cell">{registration.name}</td>
                    <td className="table-data-cell email-cell">{registration.email}</td>
                    <td className="table-data-cell phone-cell">{registration.phone}</td>
                    <td className="table-data-cell course-cell">{registration.course}</td>
                    <td className="table-data-cell date-cell">
                      {new Date(registration.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                      })}
                    </td>
                    <td className="table-data-cell actions-cell">
                      <button
                        onClick={() => deleteRegistration(registration._id)}
                        className="delete-button"
                        title="Delete Request"
                      >
                        Delete
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

export default DemoRegistrations;
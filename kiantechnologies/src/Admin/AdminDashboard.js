import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminAuthContext } from './AdminApp';
import './AdminDashboard.css';

function AdminDashboard() {
  const { admin, logout } = useContext(AdminAuthContext);
  
  return (
    <div className="admin-dashboard min-h-screen bg-gray-50">
      {/* Header */}
      <header className="admin-header">
        <div className="header-container">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <div className="header-actions">
            <span className="welcome-text">
              Welcome, <span className="admin-name">{admin?.username}</span>
            </span>
            <button
              onClick={logout}
              className="logout-btn"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-grid">
          {/* Dashboard Cards */}
          <DashboardCard 
            title="Internship Registrations"
            description="Manage internship applications"
            icon="fas fa-file-contract"
            link="/admin/internships"
            linkText="View Registrations"
            cardType="internship"
            features={[
              "Review applications",
              "Track applicant status",
              "Generate reports"
            ]}
          />
          
          <DashboardCard 
            title="Demo Registrations"
            description="Manage demo session requests"
            icon="fas fa-calendar-check"
            link="/admin/demo-registrations"
            linkText="View Requests"
            cardType="demo"
            features={[
              "Schedule demo sessions",
              "Confirm attendees",
              "Send reminders"
            ]}
          />
          
          <DashboardCard 
            title="Blog Management"
            description="Create and manage blog posts"
            icon="fas fa-blog"
            link="/admin/blog"
            linkText="Manage Blog"
            cardType="blog"
            features={[
              "Create new posts",
              "Edit existing content",
              "Schedule publications"
            ]}
          />
        </div>
      </main>
    </div>
  );
}

function DashboardCard({ title, description, link, linkText, cardType, features, icon }) {
  return (
    <div className={`dashboard-card card-${cardType}`}>
      <div className="card-header">
        <div className="card-icon">
          <i className={icon}></i>
        </div>
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="card-content">
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <i className="fas fa-check-circle feature-icon"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="card-actions">
          <Link
            to={link}
            className="card-link"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


// Components
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister'; // Import the new component
import AdminDashboard from './AdminDashboard';
import InternshipRegistrations from './InternshipRegistrations';
import DemoRegistrations from './DemoRegistrations';
import BlogManagement from './BlogManagement';
import CreateBlogPost from './CreateBlogPost';
import EditBlogPost from './EditBlogPost';

// Context for admin auth
export const AdminAuthContext = React.createContext();

function AdminApp() {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAdmin = JSON.parse(localStorage.getItem('admin'));
        if (storedAdmin && storedAdmin.token) {
            setAdmin(storedAdmin);
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/admin-login', {
                username,
                password
            });

            const adminData = {
                token: response.data.token,
                username: response.data.username
            };

            localStorage.setItem('admin', JSON.stringify(adminData));
            setAdmin(adminData);
            navigate('/admin/dashboard');
            return true;
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('admin');
        setAdmin(null);
        navigate('/admin/login');
    };

    const authContextValue = {
        admin,
        login,
        logout
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <AdminAuthContext.Provider value={authContextValue}>
            <Routes>
                {/* Route for Admin Login */}
                <Route path="/login" element={admin ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />} />
                {/* New Route for Admin Registration */}
                <Route path="/register" element={admin ? <Navigate to="/admin/dashboard" replace /> : <AdminRegister />} />


                <Route
                    path="/dashboard"
                    element={admin ? <AdminDashboard /> : <Navigate to="/admin/login" replace />}
                />
                <Route
                    path="/internships"
                    element={admin ? <InternshipRegistrations /> : <Navigate to="/admin/login" replace />}
                />
                <Route
                    path="/demo-registrations"
                    element={admin ? <DemoRegistrations /> : <Navigate to="/admin/login" replace />}
                />
                <Route
                    path="/blog"
                    element={admin ? <BlogManagement /> : <Navigate to="/admin/login" replace />}
                />
                <Route
                    path="/blog/create"
                    element={admin ? <CreateBlogPost /> : <Navigate to="/admin/login" replace />}
                />
                <Route
                    path="/blog/edit/:id"
                    element={admin ? <EditBlogPost /> : <Navigate to="/admin/login" replace />}
                />
                {/* Fallback route */}
                <Route
                    path="*"
                    element={admin ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/admin/login" replace />}
                />
            </Routes>
        </AdminAuthContext.Provider>
    );
}

export default AdminApp;
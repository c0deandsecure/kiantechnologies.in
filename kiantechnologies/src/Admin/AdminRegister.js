// src/AdminRegister.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import './AdminRegister.css'; // Import the new CSS file

function AdminRegister() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register-admin', {
                username,
                password,
            });
            setMessage(response.data.message || 'Registration successful! Redirecting to login...');
            // Redirect after a short delay to allow message to be seen
            setTimeout(() => {
                navigate('/admin/login');
            }, 1500); // Redirect after 1.5 seconds
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            // Check if it's a specific error from backend, e.g., username already exists
            setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-register-container">
            <div className="register-card">
                <div className="register-header">
                    <div className="company-logo">
                        <div className="logo-icon">
                            <div className="logo-gradient">KT</div>
                        </div>
                        <h1>Kian Technologies</h1>
                    </div>
                    <h2>Admin Registration</h2>
                </div>

                {message && (
                    <div className={`register-message ${message.includes('successful') ? 'success' : 'error'}`}>
                        {message.includes('successful') ? (
                            <span className="success-icon">&#10003;</span> // Checkmark
                        ) : (
                            <span className="error-icon">!</span> // Exclamation
                        )}
                        <div>{message}</div>
                    </div>
                )}

                <form onSubmit={handleRegister} className="register-form">
                    <div className="input-group">
                        <div className="input-icon-container">
                            <FaUser className="input-icon" />
                        </div>
                        <input
                            id="reg-username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Choose a username"
                            autoComplete="new-username"
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-icon-container">
                            <FaLock className="input-icon" />
                        </div>
                        <input
                            id="reg-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            autoComplete="new-password"
                        />
                        <div
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-icon-container">
                            <FaLock className="input-icon" />
                        </div>
                        <input
                            id="reg-confirm-password"
                            name="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                        />
                        <div
                            className="password-toggle"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`register-button ${loading ? 'loading' : ''}`}
                    >
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            'Register'
                        )}
                    </button>
                </form>

                <div className="register-footer-link">
                    <p>
                        Already have an account?{' '}
                        <Link to="/admin/login" className="login-link">
                            Login here
                        </Link>
                    </p>
                </div>

                <div className="register-card-footer">
                    <p>© 2023 Kian Technologies. All rights reserved.</p>
                    <p>v2.1.0</p>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;
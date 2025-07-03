import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { AdminAuthContext } from './AdminApp';
import { FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import './AdminLogin.css';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { login } = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const success = await login(username, password);
            if (!success) {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="company-logo">
                        <div className="logo-icon">
                            <div className="logo-gradient">KT</div>
                        </div>
                        <h1>Kian Technologies</h1>
                    </div>
                    <h2>Admin Portal</h2>
                </div>

                {error && (
                    <div className="login-error">
                        <div className="error-icon">!</div>
                        <div>{error}</div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <div className="input-icon-container">
                            <FaUser className="input-icon" />
                        </div>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            autoComplete="username"
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-icon-container">
                            <FaLock className="input-icon" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <div
                            className="password-toggle"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <div className="form-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`login-button ${loading ? 'loading' : ''}`}
                    >
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                {/* Add the registration link here */}
                <div className="register-option">
                    <p>
                        New admin?{' '}
                        <Link to="/admin/register" className="register-link">
                            Register here
                        </Link>
                    </p>
                </div>

                <div className="login-footer">
                    <p>© 2023 Kian Technologies. All rights reserved.</p>
                    <p>v2.1.0</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
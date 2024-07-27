import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import google from '../../images/google.png';
import facebook2 from '../../images/facebook2.png';
import apple from '../../images/apple.png';
import '../../css/Login.css';

const Login2 = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', { email, password, role });
            setStatusMessage('Login successful!');
            console.log('User logged in successfully:', response.data);
            // Store the token in localStorage or state management
            localStorage.setItem('token', response.data.token);
            // Redirect based on role
            if (role === 'freelancer') {
                navigate('/freelancer-dashboard');
            } else if (role === 'eventplanner') {
                navigate('/eventplanner-dashboard');
            }
        } catch (error) {
            setStatusMessage('Invalid email or password!');
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <div className="login-options2">
            <div className="login-container">
                <h2 className="login-title">Login as {role}</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-inputGroup">
                        <div className="login-text">Email Address</div>
                        <input
                            type="email"
                            className="login-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-inputGroup">
                        <div className="container1">
                            <div className="login-text">Password</div>
                            <a href="#" className="login-forgotPassword">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {statusMessage && <div className="status-message">{statusMessage}</div>}
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-divider">or</div>
                <div className="login-socialLogin">
                    <button className="login-socialButton">
                        <img src={google} alt="Google" className="login-socialIcon" />
                    </button>
                    <button className="login-socialButton">
                        <img src={facebook2} alt="Facebook" className="login-socialIcon" />
                    </button>
                    <button className="login-socialButton">
                        <img src={apple} alt="Apple" className="login-socialIcon" />
                    </button>
                </div>
                <div className="login-signupText">
                    Don’t have an account? <a href="signup" className="login-signupLink">Sign up here.</a>
                </div>
            </div>
        </div>
    );
}

export default Login2;
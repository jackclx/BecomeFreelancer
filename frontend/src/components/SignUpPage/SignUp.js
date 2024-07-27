import React, { useState } from 'react';
import axios from 'axios';
import google from '../../images/google.png';
import facebook2 from '../../images/facebook2.png';
import apple from '../../images/apple.png';
import '../../css/Login.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/signup', { email, password });
            setStatusMessage('Account created successfully!');
            console.log('Account created successfully:', response.data);
        } catch (error) {
            setStatusMessage('There was an error creating the account!');
            console.error('There was an error creating the account!', error);
        }
    };

    return (
        <div className="login-options2">
            <div className="login-container">
                <h2 className="login-title">Create an Account</h2>
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
                        <div className="login-text">Password</div>
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {statusMessage && <div className="status-message">{statusMessage}</div>}
                    <button type="submit" className="login-button">
                        Create Account
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
                    Already have an account? <a href="login" className="login-signupLink">Login here.</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
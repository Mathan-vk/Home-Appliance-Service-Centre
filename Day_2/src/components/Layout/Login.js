import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App1.css';
import {Link} from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Placeholder for your authentication logic
        const isAuthenticated = true; // Replace with actual authentication logic

        if (isAuthenticated) {
            // If authentication is successful, navigate to the home page
            navigate('/home');
        } else {
            // Handle unsuccessful login (show an error message, etc.)
            console.log('Login failed');
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                />
                <button type="button" onClick={handleLogin}>
                    Log In
                </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                Don't have an account? <Link to="Register">Register here.</Link>
            </button>
        </div>
    );
};

/*import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import './Layout/App1.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}*/
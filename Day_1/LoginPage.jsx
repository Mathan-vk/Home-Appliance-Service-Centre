import React, { useState } from 'react';
import './App.css';
import appliance from './image/appliance.png';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (username === 'user' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <div class="dim">
       <img src={appliance} alt=""></img>
       </div>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div class="fir">
        <span class="uname">
          Username:
          </span>
          <input type="text" placeholder='Email or Phone' value={username} onChange={handleUsernameChange} />
        <br></br>
        <br></br>
        <label class="password">
          Password:
          </label>
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <div class="forget">Forget Password</div>
        </div>
      </form>
      <p class="success">{message}</p>
    </div>
  );
};

export default Login;

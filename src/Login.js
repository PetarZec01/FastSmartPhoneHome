import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.username.value =='admin' && event.target.password.value =='admin'){
        return <Redirect to="/home"/>
    }
    else{ return <Redirect to="/login"/> }
  }

  return (
    <div className="login">
        <img src={require('./images/logo.jpg')} />
    <form onSubmit={handleSubmit} className="form">
    
      <h2>Login</h2>
      <div className='inputs'>
        <label htmlFor="username">Email:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='inputs'>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn-submit" >Submit</button>
    </form>
    </div>
    
  );
}

export default Login;

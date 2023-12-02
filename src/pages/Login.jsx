import React, { useState } from 'react'
import './login.css'
import { loginApi } from '../apiServices/loginApi';
import { useNavigate } from "react-router-dom";


const Login = ({setUser}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginApi(username, password);
      if (userData) {
        setUser(userData)
        navigate("/");
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <main>
      <div className="row">
        <div className="colm-form">
          <div className="form-container">
            <form onSubmit={handleSubmit}>


              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter User Name" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <button type="submit" className="btn-login">Login</button>
              <a href="#">Forgotten password?</a>
              <button className="btn-new">Create new Account</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Login
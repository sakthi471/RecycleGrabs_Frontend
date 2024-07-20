import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  const login = async () => {
    try {
      await axios.post(
        'http://localhost:5000/login',
        { username, password },
        { withCredentials: true }
      );
      setIsAuthenticated(true);
      navigate('/');
    } catch (err) {
      console.log(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className=' flex flex-col min-w-[400px] gap-5 py-20'>
      <h1 className=' text-center font-bold text-2xl'>Login</h1>
      <input className=' py-2 px-4  rounded-md border-[1px] border-slate-400'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className=' py-2 px-4  rounded-md border-[1px] border-slate-400'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className=' text-red-500 text-center'>{error}</p>}
      <button className=' bg-green-500 py-2 px-4 rounded-md text-white font-bold' onClick={login}>Login</button>
      <Link to='/register'> <small>Don't have a account <span className=' underline text-blue-700 '>Register here</span>  </small></Link>

    </div>
  )
}

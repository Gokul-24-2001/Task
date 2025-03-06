import React, { useState } from 'react';
import { login } from './api';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async () => {
        try {
            const response = await login(credentials);
            localStorage.setItem('token', response.data.access);
            alert('Login successful!');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
            <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

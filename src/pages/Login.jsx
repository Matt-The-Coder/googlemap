import { useState } from 'react';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:3000';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post(`${API_BASE_URL}/register`, { username, password, role });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
          'Content-Type': "application/json"
        }
      })
      const data = await response.json()
      const { token, role } = data;
      setToken(token);
      setRole(role);
      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  const apiToken = 'Bearer gio0FVbvlx5tFF5zCrk4A'
  const getData = async () => {
    try {
      const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        body: JSON.stringify({
          type: "electricity",
        electricity_unit: "mwh",
        electricity_value: 42,
        country: "us",
        state: "fl"
        }),
        headers: {
          Authorization: apiToken,
          'Content-type':'application/json'
        }
      })
      const res = await response.json()

      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  const handleProtected = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/protected`, {
        method: "GET",
        headers:{
          Authorization: `${token}`
        }
      })
      const data = await response.json();
      console.log(data)
      const { message } = data;

      if (role === 'admin') {
        console.log('Admin protected route accessed successfully:', message);
      } else if (role === 'user') {
        console.log('User protected route accessed successfully:', message);
      }
    } catch (error) {
      console.error('Error accessing protected route:', error);
    }
  };

  return (
    <div className="login">
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role (admin/user)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>

      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      <h2>Protected Route Access</h2>
      <button className="protected-button" onClick={handleProtected}>
        Access Protected Route
      </button>
      <button onClick={getData}>Fetch</button>
    </div>
  );
}

export default Login;
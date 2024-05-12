import React, { useState } from 'react';
import axios from 'axios';

const Signin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/signin', { username, password });
      localStorage.setItem('token', response.data.token);
      // Redirect or navigate to interview page
    } catch (error) {
      console.error('Signin error:', error);
      alert('Signin failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

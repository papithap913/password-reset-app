import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PasswordResetForm() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams(); // Get the token from URL params

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/reset-password/${token}`, { password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Reset Password</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default PasswordResetForm;

import React, { useState } from 'react';
import axios from 'axios';

function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/request-reset', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Password Reset</h2>
      <form onSubmit={handleRequestReset}>
        <div className="form-group">
          <label htmlFor="email">Enter your email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Request Reset Link</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default PasswordResetRequest;

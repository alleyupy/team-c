import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="login-card">
      {/* Header Card: Logo, Garis Pemisah, dan Tulisan LOGIN */}
      <div className="card-header">
        <div className="logo-badge">
          <span className="logo-icon">👥</span>
          <span className="logo-text">2nd group</span>
        </div>
        <div className="vertical-divider"></div>
        <h2 className="card-title">LOGIN</h2>
      </div>

      {/* Form Input Username & Password */}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="card-login-btn">
          LOGIN
        </button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaHeartbeat, FaLock, FaUser } from 'react-icons/fa';

const LoginPage = ({ onLogin }) => {
  const [showPassword, setshowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Demo credentials
  const validCredentials = {
    email: 'admin@plasmabridge.com',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validCredentials.email && password === validCredentials.password) {
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80 }}>
              <FaHeartbeat size={40} className="text-danger" />
            </div>
          </motion.div>
          <h2 className="fw-bold mb-1">Welcome Back!</h2>
          <p className="text-muted">Login to PlasmaBridge Gateway</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger mb-3">{error}</div>
          )}
          <div className="mb-3">
            <label className="form-label-custom d-block">Email Address</label>
            <div className="position-relative">
              <FaUser className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="email" 
                className="form-control-custom ps-5"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label-custom d-block">Password</label>
            <div className="position-relative">
              <FaLock className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type={showPassword ? 'text' : 'password'}
                className="form-control-custom ps-5 pe-5"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                required
              />
              <button 
                type="button"
                className="btn btn-link position-absolute text-muted"
                style={{ right: 10, top: '50%', transform: 'translateY(-50%)' }}
                onClick={() => setshowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label text-muted small">Remember me</label>
            </div>
            <a href="#" className="text-danger text-decoration-none small">Forgot Password?</a>
          </div>

          <motion.button 
            type="submit"
            className="btn-gradient w-100 mb-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>

          <div className="text-center">
            <span className="text-muted small">Don't have an account? </span>
            <a href="#" className="text-danger text-decoration-none fw-medium small">Register Now</a>
          </div>
        </form>

        <div className="mt-4 pt-3 border-top">
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-light rounded-circle p-2" style={{ width: 40, height: 40 }}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
            </button>
            <button className="btn btn-light rounded-circle p-2" style={{ width: 40, height: 40 }}>
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" width="20" />
            </button>
          </div>
          <p className="text-center text-muted mt-2 mb-0" style={{ fontSize: '0.8rem' }}>Or sign in with</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

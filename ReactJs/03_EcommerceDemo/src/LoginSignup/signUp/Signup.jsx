import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group1">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

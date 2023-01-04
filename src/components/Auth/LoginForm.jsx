/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import '../../styles/Auth/Form.scss';

const LoginForm = ({ onClose, setStatus }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>
        By continuing, you agree are setting up an account and agree to our User
        Agreement and Privacy Policy.
      </h4>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
      <p className="login__register">
        <a href="#" onClick={onClose}>
          Forget your password?
        </a>
      </p>
      <span className="login__register">
        New user? <a onClick={() => setStatus('register')}>Register</a>
      </span>
    </form>
  );
};

export default LoginForm;

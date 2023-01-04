import React, { useState } from 'react';

import '../../styles/Auth/Form.scss';

// const RegisterForm = ({ setStatus }) => {
//   return (
//     <div className='login__form'>
//       <input type='text' placeholder='Your Name' />
//       <input type='email' placeholder='Your Email' />
//       <input type='password' placeholder='Your Password' />
//       <button>Register</button>
//       <span className='login__register'>
//         Want to login instead?{' '}
//         <a onClick={() => setStatus('login')}>Login here!</a>
//       </span>
//     </div>
//   );
// };

// export default RegisterForm;

const RegisterForm = ({ onClose, setStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>
        By continuing, you agree are setting up an account and agree to our User
        Agreement and Privacy Policy.
      </h4>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button type="submit">Register</button>
      <span className="login__register">
        Already have an acccount?{' '}
        <a onClick={() => setStatus('login')}>Login</a>
      </span>
    </form>
  );
};

export default RegisterForm;

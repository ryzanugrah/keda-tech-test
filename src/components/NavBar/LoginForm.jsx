import React from "react";

import "../../styles/NavBar/LoginModal/Form.scss";

const LoginForm = ({ setStatus }) => {
  return (
    <div className="login__form">
      <input type="email" placeholder="Your Email" />
      <input type="password" placeholder="Your Password" />
      <button>Login</button>
      <span className="login__register">
        New user? <a onClick={() => setStatus("register")}>Register here!</a>
      </span>
    </div>
  );
};

export default LoginForm;

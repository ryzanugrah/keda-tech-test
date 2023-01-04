import React from "react";

import "../../styles/NavBar/LoginModal/Form.scss";

const RegisterForm = ({ setStatus }) => {
  return (
    <div className="login__form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="password" placeholder="Your Password" />
      <button>Register</button>
      <span className="login__register">
        Want to login instead?{" "}
        <a onClick={() => setStatus("login")}>Login here!</a>
      </span>
    </div>
  );
};

export default RegisterForm;

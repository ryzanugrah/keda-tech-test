/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import Modal from '../Auth/Modal';
import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';

import '../../styles/NavBar/Nav.scss';
import logo from '../../images/logo.png';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState('login');

  return (
    <>
      <div className="navbar">
        <div className="logo__wrapper">
          <img src={logo} alt="Logo" />
          <a href="#">ERP TECH</a>
        </div>
        <ul className="nav__links">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a onClick={() => setOpenModal(true)}>LOGIN</a>
          </li>
        </ul>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <span
          onClick={() => setOpenModal(false)}
          style={{
            position: 'absolute',
            right: '7%',
            top: '5%',
            cursor: 'pointer',
          }}
        >
          <strong style={{ color: '#21BFF5' }}>X</strong>
        </span>
        {status === 'login' ? (
          <>
            <h1 style={{ marginBottom: '.5em' }}>Login</h1>
            <LoginForm setStatus={setStatus} />
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: '.5em' }}>Register</h1>
            <RegisterForm setStatus={setStatus} />
          </>
        )}
      </Modal>
    </>
  );
};

export default Nav;

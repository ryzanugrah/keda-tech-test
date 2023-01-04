/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer__container">
          <div className="footer__section about">
            <h3>About Us</h3>
            <p>
              Enterprise resource planning (ERP) is a type of software system
              that helps organizations automate and manage core business
              processes for optimal performance.
            </p>
          </div>
          <div className="footer__section links">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__section contact">
            <h3>Contact</h3>
            <p>Email: info@erp-tech.com</p>
            <p>Phone: +123 456 789</p>
            <p>Address: Lorem Ipsum 123</p>
          </div>
        </div>
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </motion.p>
    </footer>
  );
};

export default Footer;

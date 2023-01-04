import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Header/Header.scss';

const Header = () => {
  return (
    <div className="header__wrapper">
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="header__tagline"
      >
        WELCOME TO ERP TECH
      </motion.p>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="header__title"
      >
        THE ULTIMATE ERP SOFTWARE FOR YOUR BUSINESS
      </motion.h1>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="header__cta"
        href="#about"
      >
        Read More
      </motion.a>
    </div>
  );
};

export default Header;

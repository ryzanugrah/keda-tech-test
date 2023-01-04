import React from "react";
import { motion } from "framer-motion";

import "../../styles/Header/Header.scss";
import web from "../../images/website.png";
import users from "../../images/users.png";
import services from "../../images/services.png";
import upgrade from "../../images/upgrade.png";
import features from "../../images/features.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="header__title"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </motion.h1>
    </div>
  );
};

export default Header;

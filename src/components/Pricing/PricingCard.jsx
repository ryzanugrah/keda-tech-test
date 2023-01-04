import React from "react";
import { motion } from "framer-motion";

import "../../styles/Pricing/PricingCard.scss";

const PricingCard = () => {
  return (
    <div className="cards__wrapper">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="card"
      >
        <div className="card__title">
          <h2>Basic</h2>
        </div>
        <div className="card__price">
          <h2>
            <span>Rp</span>1.000.000
          </h2>
        </div>
        <div className="card__features">
          <h4>Benefits:</h4>
          <ul>
            <li>Record incoming goods</li>
            <li>Record outgoing goods</li>
            <li>Record profits</li>
          </ul>
        </div>
        <div className="card__cta">
          <a href="#">Learn More</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="card"
      >
        <div className="card__title">
          <h2>Business</h2>
        </div>
        <div className="card__price">
          <h2>
            <span>Rp</span>5.000.000
          </h2>
        </div>
        <div className="card__features">
          <h4>Benefits:</h4>
          <ul>
            <li>Everything from Basic plan</li>
            <li>Chart analysis of goods sold</li>
            <li>7x24 support</li>
          </ul>
        </div>
        <div className="card__cta">
          <a href="#">Learn More</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="card"
      >
        <div className="card__title">
          <h2>Entrepreneur</h2>
        </div>
        <div className="card__price">
          <h2>
            <span>Rp</span>10.000.000
          </h2>
        </div>
        <div className="card__features">
          <h4>Benefits:</h4>
          <ul>
            <li>Everything from Business plan</li>
            <li>Export data to Excel</li>
            <li>AI prediction of profits</li>
          </ul>
        </div>
        <div className="card__cta">
          <a href="#">Learn More</a>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingCard;

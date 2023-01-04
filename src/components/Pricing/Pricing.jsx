import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Pricing/Pricing.scss';

const Pricing = () => {
  return (
    <div className="pricing__wrapper" id="pricing">
      <div className="container">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pricing-title"
        >
          Choose Your Plan
        </motion.h1>
        <div className="cards__wrapper">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="card__title">
              <h2>Basic</h2>
            </div>
            <div className="card__price">
              <h2>
                <span>$</span>49
              </h2>
            </div>
            <div className="card__features">
              <ul>
                <li>Record incoming goods</li>
                <li>Record outgoing goods</li>
                <li>Record profits</li>
              </ul>
            </div>
            <a className="card__cta" href=" ">
              Choose Plan
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="card__title">
              <h2>Business</h2>
            </div>
            <div className="card__price">
              <h2>
                <span>$</span>99
              </h2>
            </div>
            <div className="card__features">
              <ul>
                <li>Everything from Basic plan</li>
                <li>Chart analysis of goods sold</li>
                <li>7x24 support</li>
              </ul>
            </div>
            <a className="card__cta" href=" ">
              Choose Plan
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="card__title">
              <h2>Entrepreneur</h2>
            </div>
            <div className="card__price">
              <h2>
                <span>$</span>199
              </h2>
            </div>
            <div className="card__features">
              <ul>
                <li>Everything from Business plan</li>
                <li>Export data to Excel</li>
                <li>AI prediction of profits</li>
              </ul>
            </div>
            <a className="card__cta" href=" ">
              Choose Plan
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

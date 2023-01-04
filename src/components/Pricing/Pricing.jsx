import React from "react";
import { motion } from "framer-motion";

import PricingCard from "./PricingCard";

import "../../styles/Pricing/Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing__wrapper" id="pricing">
      <div className="container">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pricing__title"
        >
          OUR PRICING
        </motion.h1>
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;

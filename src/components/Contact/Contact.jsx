import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Contact/Contact.scss';
import contact from '../../images/contact.jpg';

const Contact = () => {
  return (
    <div className="contact__wrapper" id="contact">
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="contact__section"
      >
        <img src={contact} alt="contact" />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="contact__us"
      >
        <div className="contact__header">
          <h2>Contact Us</h2>
          <p>
            We value our customers and the communities we call home. We
            appreciate your questions, comments and feedback so we can better
            serve you. Whether you need assistance with an order, have a
            suggestion for us, or just want to say hello, we would love to hear
            from you. Please don't hesitate to reach out to us via phone, email,
            or just to have a chat!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

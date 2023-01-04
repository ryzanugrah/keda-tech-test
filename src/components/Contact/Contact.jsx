import React from "react";
import { motion } from "framer-motion";

import "../../styles/Contact/Contact.scss";
import address from "../../images/contact/address.png";
import email from "../../images/contact/email.png";
import phone from "../../images/contact/phone.png";
import website from "../../images/contact/website.png";

const Contact = () => {
  return (
    <div className="contact__wrapper" id="contact">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="message__section"
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Send us a message
        </motion.h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="message__form"
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="contact__us"
      >
        <div className="contact__header">
          <h2>Contact us</h2>
          <p>We're open for any suggestion or just to have a chat!</p>
        </div>
        <div className="contact__details">
          <div className="contact__item">
            <div className="item__logo">
              <img src={address} alt="Address Logo" />
            </div>
            <div className="item__detail">
              <p>
                <strong>Address:</strong> 8, Jl. Ratu Kemuning Bl. Bl No.1,
                RT.12/RW.14, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat,
                Daerah Khusus Ibukota Jakarta 11510
              </p>
            </div>
          </div>
          <div className="contact__item">
            <div className="item__logo">
              <img src={phone} alt="Address Logo" />
            </div>
            <div className="item__detail">
              <p>
                <strong>Phone:</strong> +62-881-3987-16212
              </p>
            </div>
          </div>
          <div className="contact__item">
            <div className="item__logo">
              <img src={email} alt="Address Logo" />
            </div>
            <div className="item__detail">
              <p>
                <strong>Email:</strong> randomemail@mail.com
              </p>
            </div>
          </div>
          <div className="contact__item">
            <div className="item__logo">
              <img src={website} alt="Address Logo" />
            </div>
            <div className="item__detail">
              <p>
                <strong>Website:</strong> www.erp-solutions.com
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

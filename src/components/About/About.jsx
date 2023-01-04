import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/About/About.scss';

const About = () => {
  return (
    <div className="about__wrapper" id="about">
      <div className="container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about__title"
        >
          <h2>What is ERP Software?</h2>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="about__content"
        >
          <p>
            Enterprise resource planning (ERP) is a type of software system that
            helps organizations automate and manage core business processes for
            optimal performance. ERP software coordinates the flow of data
            between a company’s business processes, providing a single source of
            truth and streamlining operations across the enterprise. It’s
            capable of linking a company’s financials, supply chain, operations,
            commerce, reporting, manufacturing, and human resources activities
            on one platform.
          </p>
          <p>
            Most companies have a finance and operational system in place, but
            siloed systems can’t go beyond everyday business processes or help
            with future business growth. As companies expand and their needs
            change, their systems should keep up with them. In this article,
            you’ll learn what ERP is and why having software in place that keeps
            up with your needs can help run a more agile and efficient business.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

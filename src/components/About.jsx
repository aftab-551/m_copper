import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Martika Copper Refinery</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Martika Copper Refinery is a trusted name in copper scrap removal
              and recycling, proudly serving Melbourne, Victoria. We offer
              competitive rates for copper, brass, aluminium, and other scrap
              metals, with convenient same-day pickup options.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether it’s scrap metal or an old car taking up space, we’ll come
              to you, remove it, and pay you top market value. At Martika, we
              make metal recycling easy, efficient, and rewarding.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">
                  99.99%
                </h4>
                <p className="text-gray-600">Metal Purity</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">
                  100+
                </h4>
                <p className="text-gray-600">Local Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">
                  24/7
                </h4>
                <p className="text-gray-600">Service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

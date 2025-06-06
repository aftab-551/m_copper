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
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Martika Copper</h2>
          <p className="section-subtitle">
            Excellence in copper refining since 1985, delivering quality and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Copper refinery facility" 
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Heritage of Excellence</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1985, Martika Copper Refinery has grown to become a leader in the copper industry. 
              We combine traditional craftsmanship with cutting-edge technology to deliver copper products of 
              unparalleled quality and purity.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our state-of-the-art facilities and expert metallurgists ensure we meet the highest 
              international standards while maintaining our commitment to sustainable and responsible 
              manufacturing practices.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">99.99%</h4>
                <p className="text-gray-600">Copper Purity</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">40+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">50+</h4>
                <p className="text-gray-600">Global Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="text-primary-600 font-bold text-xl mb-2">24/7</h4>
                <p className="text-gray-600">Production</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaIndustry, FaRecycle, FaFlask, FaShippingFast, FaTools, FaLeaf } from 'react-icons/fa';
import { servicesData } from '../data/services';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaIndustry className="text-4xl text-primary-600 mb-4" />,
      title: 'Copper Refining',
      description: 'State-of-the-art refining processes that deliver up to 99.99% pure copper for industrial applications.',
      slug: 'copper-refining',
    },
    {
      icon: <FaRecycle className="text-4xl text-primary-600 mb-4" />,
      title: 'Recycling Solutions',
      description: 'Sustainable recycling of copper scrap and waste materials, transforming them into high-quality refined copper.',
      slug: 'recycling-solutions',
    },
    {
      icon: <FaFlask className="text-4xl text-primary-600 mb-4" />,
      title: 'Metal Analysis',
      description: 'Comprehensive testing and analysis services to ensure purity and quality standards are met for all copper products.',
      slug: 'metal-analysis',
    },
    {
      icon: <FaShippingFast className="text-4xl text-primary-600 mb-4" />,
      title: 'Global Distribution',
      description: 'Reliable shipping and logistics solutions to deliver refined copper products to clients worldwide.',
      slug: 'global-distribution',
    },
    {
      icon: <FaTools className="text-4xl text-primary-600 mb-4" />,
      title: 'Custom Fabrication',
      description: 'Specialized copper fabrication services tailored to meet specific industrial requirements and specifications.',
      slug: 'custom-fabrication',
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600 mb-4" />,
      title: 'Sustainable Practices',
      description: 'Environmentally responsible refining processes that minimize waste and reduce the carbon footprint.',
      slug: 'sustainable-practices',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive copper solutions for a range of industries and applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/services/${service.slug}`} className="block text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-dark hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="btn btn-primary">
            Request Custom Service
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
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
      title: 'Scrap Cable Recycling Melbourne',
      description: 'Martika Copper Refinery recycles stripped and faulty insulated cables across Victoria, helping reduce the need for copper mining.Sell your scrap cables and contribute to a sustainable future.We offer top cash rates for cables from both homes and businesses',
      slug: 'scrap-cables',
    },
    {
      icon: <FaRecycle className="text-4xl text-primary-600 mb-4" />,
      title: 'Scrap PVC Recycling Melbourne',
      description: 'Got leftover PVC waste? Martika Copper Refinery offers safe, eco-friendly recycling for PVC cables and wires across Victoria.We help reduce landfill pollution and environmental harm—while you earn top rates for your scrap.Whether from homes or factories, count on us for reliable PVC waste removal and recycling',
      slug: 'scrap-pvc',
    },
    {
      icon: <FaFlask className="text-4xl text-primary-600 mb-4" />,
      title: 'Aluminium Recycling',
      description: 'Have aluminium scrap at your home or business? Martika Copper Refinery offers fast, hassle-free pickup across Victoria.Recycling aluminium with us saves energy, reduces environmental impact, and earns you top cash.Join us in supporting sustainability through responsible scrap metal recycling',
      slug: 'Aluminium-Recycling',
    },
    {
      icon: <FaShippingFast className="text-4xl text-primary-600 mb-4" />,
      title: 'Brass Scrap Pick Up',
      description: 'Got brass scrap at your home or worksite? Martika Copper Refinery offers reliable brass scrap pickup across Melbourne.We ensure safe collection with the right tools and offer top prices—free pickup available for qualifying quantities.Choose us for hassle-free brass recycling and a cleaner environment',
      slug: 'brass-scrap',
    },
    {
      icon: <FaTools className="text-4xl text-primary-600 mb-4" />,
      title: 'Scrap Metal Pick Up',
      description: 'Many industries prefer scrap metal over new materials due to cost and sustainability.Martika Copper Refinery offers efficient and profitable scrap metal recycling for industrial, commercial, and residential clients across Melbourne.We handle a wide range of recyclable metals with reliable service and competitive rates',
      slug: 'scrap-metal',
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600 mb-4" />,
      title: 'Lead Scrap Recycling',
      description: 'Have lead waste at your home or factory? Martika Copper Refinery provides safe, professional lead recycling services across Melbourne.Lead is highly toxic and harmful to health and the environment, so proper disposal is essential.We ensure eco-friendly recycling to prevent long-term contamination of soil, air, and water',
      slug: 'lead-scrap',
    },
    {
      icon: <FaLeaf className="text-4xl text-primary-600 mb-4" />,
      title: 'Stainless Steel Recycling',
      description: 'Stainless steel is durable and fully recyclable, with 60% of global production coming from recycled materials.Valuable elements like nickel, chromium, and titanium can be recovered through advanced recycling processes.At Martika Copper Refinery, we make stainless steel recycling both eco-friendly and economically rewarding.',
      slug: 'Stainless-Steel',
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
                {/* {service.icon} */}
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
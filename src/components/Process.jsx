import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processes = [
    {
      number: "01",
      title: "Raw Material Sourcing",
      description: "We source high-quality copper ore and recycled materials from trusted suppliers worldwide.",
    },
    {
      number: "02",
      title: "Concentration",
      description: "Copper ore undergoes crushing, grinding and flotation to increase copper content to 20-40%.",
    },
    {
      number: "03",
      title: "Smelting",
      description: "High-temperature processing converts copper concentrate into matte with 50-70% copper content.",
    },
    {
      number: "04",
      title: "Converting",
      description: "Copper matte is processed to remove iron and sulfur impurities, producing blister copper.",
    },
    {
      number: "05",
      title: "Fire Refining",
      description: "Blister copper is refined in an anode furnace to remove remaining oxygen and sulfur.",
    },
    {
      number: "06",
      title: "Electrolytic Refining",
      description: "Electrorefining purifies copper to 99.99% purity, ready for industrial applications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="process" className="section bg-process-pattern bg-fixed">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white">Our Refining Process</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A meticulous six-step journey from raw material to premium copper
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-primary-600/30"
            >
              <div className="text-primary-500 font-bold text-4xl mb-4">
                {process.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
              <p className="text-gray-300">{process.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary">
            Request a Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
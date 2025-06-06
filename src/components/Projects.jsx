import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Electrical Conductor Manufacturing",
      category: "industrial",
      image: "https://images.pexels.com/photos/236959/pexels-photo-236959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "High-purity copper for electrical power transmission systems.",
    },
    {
      id: 2,
      title: "Architectural Copper Elements",
      category: "architectural",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom copper facades and roofing for modern architecture.",
    },
    {
      id: 3,
      title: "Electronics Manufacturing",
      category: "electronics",
      image: "https://images.pexels.com/photos/3912982/pexels-photo-3912982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Ultra-pure copper components for electronics applications.",
    },
    {
      id: 4,
      title: "Sustainable Urban Development",
      category: "architectural",
      image: "https://images.pexels.com/photos/11674118/pexels-photo-11674118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Copper materials for sustainable building projects.",
    },
    {
      id: 5,
      title: "Renewable Energy Systems",
      category: "industrial",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Copper components for solar and wind energy infrastructure.",
    },
    {
      id: 6,
      title: "Medical Equipment",
      category: "electronics",
      image: "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Antimicrobial copper alloys for healthcare applications.",
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="section bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Exploring our copper expertise across diverse industries and applications
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('industrial')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'industrial'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Industrial
            </button>
            <button
              onClick={() => setFilter('architectural')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'architectural'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Architectural
            </button>
            <button
              onClick={() => setFilter('electronics')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'electronics'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Electronics
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-primary-100 text-primary-800 last:mr-0 mr-1 uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
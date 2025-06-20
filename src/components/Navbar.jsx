import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'services', title: 'Services' },
    { id: 'process', title: 'Process' },
    { id: 'projects', title: 'Projects' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark shadow-lg py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <img 
              src="/final-png-for-martika.png" 
              alt="Martika Copper Refinery" 
              className={`transition-all duration-300 ${
                scrolled ? 'h-16' : 'h-20'
              }`}
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link font-medium cursor-pointer"
              activeClass="active"
            >
              {link.title}
            </Link>
          ))}
          
          {/* Phone Button */}
          <a
            href="tel:+61398765432"
            className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium"
          >
            <FaPhone className="text-sm" />
            <span>+61 4 0776 9293</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark shadow-xl"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link font-medium py-2 cursor-pointer"
                activeClass="active"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Mobile Phone Button */}
            <a
              href="tel:+61407769293"
              className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-md transition-colors duration-300 font-medium mt-4"
              onClick={toggleMenu}
            >
              <FaPhone className="text-sm" />
              <span>Call Now: +61 4 0776 9293</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
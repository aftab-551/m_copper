import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/final-png-for-martika.png" 
                alt="Martika Copper Refinery" 
                className="h-16 mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Delivering premium copper solutions through innovation, quality, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="process" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Process
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Scrap Cable Recycling Melbourne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Scrap PVC Recycling Melbourne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Aluminium Recycling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Brass Scrap Pick Up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Scrap Metal Pick Up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Lead Scrap Recycling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Stainless Steel Recycling
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              We respect your privacy. Your information is safe with us.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex justify-center space-x-4">
          <p>© {new Date().getFullYear()} Martika Copper Refinery. All rights reserved.</p>
          <p>Designed & Developed By <a href="https://www.eparameter.com" className="text-gray-400 hover:text-gray-300">eParameter</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-scroll";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Link as AnchorLink } from "react-router-dom";

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
                            For any type of metal, steel, aluminium, or copper.
                            Get instant cash from your desired location. We
                            guarantee the best rates in the market. For
                            Melbourne and its surrounding suburbs.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="process"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <AnchorLink
                                    to="/services/scrap-cables"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Scrap Cable Recycling Melbourne
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/scrap-pvc"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Scrap PVC Recycling Melbourne
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/Aluminium-Recycling"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Aluminium Recycling
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/brass-scrap"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Brass Scrap Pick Up
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/scrap-metal"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Scrap Metal Pick Up
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/lead-scrap"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Lead Scrap Recycling
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                    to="/services/Stainless-Steel"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    Stainless Steel Recycling
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex justify-center space-x-4">
                    <p>
                        © {new Date().getFullYear()} Martika Copper Refinery.
                        All rights reserved.
                    </p>
                    <p>
                        Designed & Developed By{" "}
                        <a
                            href="https://www.eparameter.com"
                            className="text-gray-400 hover:text-gray-300"
                        >
                            eParameter
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

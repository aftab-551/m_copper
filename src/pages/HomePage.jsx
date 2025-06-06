import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      quote: "Best prices for copper and nonferrous metals, with friendly staff. The top yard in the area—10/10!",
      name: "Sarah Johnson",
      position: "Chief Engineer, PowerGrid Solutions",
      company: "PowerGrid Solutions",
    },
    {
      id: 2,
      quote: "As an architectural firm specializing in sustainable design, we rely on Martika's copper products for both their aesthetic appeal and environmental benefits. Their team's expertise has been invaluable to our projects.",
      name: "Michael Chen",
      position: "Principal Architect",
      company: "EcoDesign Partners",
    },
    {
      id: 3,
      quote: "The consistency and quality of Martika's refined copper has allowed our electronics manufacturing to maintain the highest standards. Their technical support team is also exceptionally knowledgeable.",
      name: "David Rodriguez",
      position: "Production Director",
      company: "NextGen Electronics",
    },
    {
      id: 4,
      quote: "We've worked with several copper suppliers over the years, but Martika stands out for their reliability and commitment to sustainability. Their recycling program has helped us meet our environmental goals.",
      name: "Lisa Thompson",
      position: "Sustainability Officer",
      company: "GreenBuild Construction",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="section bg-secondary-800 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            What our partners and clients say about working with Martika Copper
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-secondary-700 p-8 rounded-lg shadow-lg">
                  <svg 
                    className="w-10 h-10 text-primary-500 mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      {/* <p className="text-primary-400">
                        {testimonial.position}, {testimonial.company}
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
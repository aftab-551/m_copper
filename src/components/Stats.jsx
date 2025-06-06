import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      value: 40000,
      suffix: "+",
      title: "Tons Processed Annually",
    },
    {
      value: 35,
      suffix: "+",
      title: "Countries Served",
    },
    {
      value: 99.99,
      suffix: "%",
      title: "Copper Purity",
    },
    {
      value: 250,
      suffix: "+",
      title: "Expert Staff",
    },
  ];

  return (
    <section className="py-16 copper-gradient">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.value === 99.99 ? 2 : 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-gray-200">{stat.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import laptop from '@/public/Laptop-removebg-preview.png'

const StatsSection = () => {
  const stats = [
    { number: '4369', label: 'Satisfied Clients' },
    { number: '2406', label: 'Cups of Coffee' },
    { number: '3978+', label: 'Project Finished' },
    { number: '57%', label: 'Happy Customers' }
  ];

  return (
    <section className="mb-4  relative overflow-hidden">
     

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-3xl font-semibold mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Here{"'"}re some impressive numbers about us
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 scale-75 relative gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute -top-24 -right-24 text-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={laptop}
            alt="Mobile device"
            className="md:w-80 max-lg:scale-70 max-md:scale-90 max-md:mr-6 max-md:mt-24 scale-100 max-lg:mt-4 md:flex   h-auto ml-auto"
          />
          
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Camera, Layers, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Services from "@/public/Services3.png";
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    { icon: Settings, title: 'Excellent Features', description: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
    { icon: Camera, title: 'Simple & Clean', description: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
    { icon: Layers, title: 'Parallax Effect', description: 'Lorem ipsum dolor sit amet consectetur adipiscing' },
    { icon: Clock, title: '24/7 Support', description: 'Lorem ipsum dolor sit amet consectetur adipiscing' }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className='scale-65'>
      <SectionHeader headline='Clean Idea and unique Design' label='SERVICE'/>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            
            <div className="relative">
              <motion.div
                className="absolute opacity-50 -left-24 bg-transparent top-32 z-20 w-48 h-48 donut-large"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: -90 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <Image
                src={Services}
                alt="Professional team"
                width={192}
                height={192}
                className="w-full  relative z-10"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 scale-90 ">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`p-8 text-center relative ${
                    index === 0 ? 'border-r-2 border-b-2 border-gray-200' :
                    index === 1 ? 'border-b-2 border-gray-200' :
                    index === 2 ? 'border-r-2 border-gray-200' :
                    ''
                  }`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-slate-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
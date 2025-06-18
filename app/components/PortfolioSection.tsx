"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Search } from 'lucide-react';
import pic1  from '@/public/pic1.jpeg';
import pic2  from '@/public/pic2.png';
import pic3  from '@/public/pic3.jpeg';
import pic4  from '@/public/pic4.jpeg';
import pic5  from '@/public/pic5.jpeg';
import pic6  from '@/public/pic6.jpeg';
import pic7  from '@/public/pic7.jpeg';
import pic8  from '@/public/pic8.jpeg';
import Image from 'next/image';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Fullwidth Slideshow',
      category: 'Web Design',
      image: pic1,
      size: 'medium',
      
    },
    {
      id: 2,
      title: 'Business Workspace',
      category: 'Photography',
      image: pic2,
      size: 'medium'
    },
    {
      id: 3,
      title: 'Creative Portrait',
      category: 'Art Direction',
      image: pic3,
      size: 'medium'
    },
    {
      id: 4,
      title: 'Abstract Art',
      category: 'Digital Art',
      image: pic4,
      size: 'medium'
    },
    {
      id: 5,
      title: 'Adventure Photography',
      category: 'Photography',
      image: pic5,
      size: 'medium'
    },
    {
      id: 6,
      title: 'Office Environment',
      category: 'Corporate',
      image: pic6,
      size: 'medium'
    },
    {
      id: 7,
      title: 'Creative Lifestyle',
      category: 'Lifestyle',
      image: pic7,
      size: 'medium'
    },
    {
      id: 8,
      title: 'Fashion Portrait',
      category: 'Fashion',
      image: pic8,
      size: 'medium'
    }
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-9xl font-bold text-gray-100 select-none">WORK</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-4xl font-bold mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Creative Portfolio
        </motion.h2>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4 md:gap-0 h-[600px]">
          

         
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden bg-gray-200"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <div className="flex space-x-2 justify-center mb-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400 text-slate-800 p-2 rounded-full"
                    >
                      <Search className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400 text-slate-800 p-2 rounded-full"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-300">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden bg-gray-200 aspect-square"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                alt={item.title}
                
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <div className="flex space-x-3 justify-center mb-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400 text-slate-800 p-3 rounded-full"
                    >
                      <Search className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400 text-slate-800 p-3 rounded-full"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
              {item && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-slate-800 px-3 py-1 text-sm font-semibold">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PortfolioSection;
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Robert Williams',
      role: 'Web Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      featured: true
    },
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Creative thinker with experience in user-centered design and product ideation.',
      featured: true
    },
    {
      name: 'Emily Carter',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Driven and detail-oriented leader passionate about building impactful products.',
      featured: true
    }
  ];

  const socialIcons = [Facebook, Twitter, Github, Linkedin, Instagram];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <SectionHeader label="EXPERT" headline="Meet our Team" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[3/4] perspective group">
                <div className="w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  <div className="absolute w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={` w-full relative h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 text-center ${member.featured ? 'bg-yellow-400 text-slate-800' : 'bg-gray-100 text-gray-800'} rounded-xl shadow-lg`}>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm mb-3">{member.role}</p>
                    <p className="text-sm mb-6">{member.description}</p>
                    <div className="flex justify-center absolute bottom-6 border-t pt-5 w-[90%] border-t-slate-200 space-x-3">
                      {socialIcons.map((Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          whileHover={{ scale: 1.2 }}
                          className={`p-2 rounded-full  ${member.featured ? 'bg-slate-800 text-yellow-400' : 'bg-slate-800 text-white'} cursor-pointer`}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

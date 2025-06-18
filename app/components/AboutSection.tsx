"use client"
import React from 'react'
import SectionHeader from './SectionHeader'
import {motion} from 'framer-motion'
import FeaturesSection from './FeaturesSection'
import StatsSection from './StatsSection'

const AboutSection = () => {
  return (
    <div className='w-screen py-5 overflow-hidden'>

<SectionHeader 
  label="ABOUT" 
  headline="This is the one page polo" 
/>
<div className='flex justify-center flex-col w-[70%] mx-auto items-center'>
<motion.p
        className="text-gray-600 text-lg text-center leading-relaxed mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-black text-yellow-300 px-8 py-3 font-semibold transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Info
        </motion.button>
        <motion.button
          className="bg-black text-white px-8 py-3 font-semibold  transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Experience
        </motion.button>
      </motion.div>
</div>
<FeaturesSection/>
<StatsSection/>
 
    </div>
  )
}

export default AboutSection
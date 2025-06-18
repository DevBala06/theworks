"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImage from "@/public/HeroImage2.png";
import Image from "next/image";
import LinePattern from "./LinePattern";

const HeroSection = () => {
  return (
    <>
      
      <section className="relative md:max-h-screen w-[97vw] mx-auto  overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2  items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="px-6 mb-6 scale-90"
            >
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -180 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="relative top-64 -right-[100%]  w-24 h-24 donut-medium"
                
              >
                <div className="absolute right-14 w-12 h-24 bg-[#F5F5F5]"></div>
              </motion.div>
              <div className="mb-5 ">
              <motion.h1
                className="text-3xl lg:text-4xl  z-10  font-black  relative leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block ">CREATIVE</span>
                <span className="block">AND PROFESSIONAL</span>
                <div className="absolute top-0 -left-5 md:-left-6 w-20 h-20 md:w-24 md:h-24 -z-10 bg-[#FAFA33] rounded-full "></div>
              </motion.h1>

              <motion.p
                className="text-gray-600 text-xs md:text-sm font-semibold mb-4 mt-4 w-[70vw] md:w-[42vw] "
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Use by you or one client in a single end product which end users
                are not charged <br />
                for. Use by you, one client in a single end product which end
                users are not charged for.
              </motion.p>

              <motion.button
                className="bg-transparent rounded-md border-2 border-gray-800 text-gray-800 px-4 py-1 md:px-6 md:py-2 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Contact Us
              </motion.button>
              <div className="flex justify-start mt-10 ml-1">
              <LinePattern/>
              </div>
              </div>
              
            </motion.div> 

            <motion.div
              className="md:ml-14 md:-translate-y-7"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src={heroImage}
                alt="manWithBeard"
                className="w-full z-40  max-w-md "
                
              />
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{}}
                className="absolute left-40   md:flex sm:-top-36 -z-40 md:left-48 bg-[#FAFA33] w-[22rem] h-[22rem] hero-donut-large"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

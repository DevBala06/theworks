import React from 'react';
import { motion } from 'framer-motion';
import { Star, Earth, Lock } from 'lucide-react';


const FeaturesSection = () => {
  const features = [
    {
      icon: Star,
      title: 'Responsive Design',
      bgColor: 'bg-black',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Earth ,
      title: 'Awesome Features',
      bgColor: 'bg-black',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Lock ,
      title: 'Powerful Security',
      bgColor: 'bg-[#FFEB00]',
      iconColor: 'text-white',
      textColor: 'text-white',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-16">
        <div className="relative grid md:grid-cols-3 gap-4">
          <motion.div
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="absolute -z-0 top-8 -left-72 bg-[#FAFA33] w-[30rem] h-[30rem] donut-large"
                        />
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.bgColor} p-8 scale-90 text-center z-10  h-80 flex flex-col justify-center`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
            >
              <feature.icon className={`w-12 h-12 ${feature.iconColor} mx-auto mb-6`} />
              <h3 className={`text-2xl font-bold mb-4 ${feature.textColor || 'text-white'}`}>
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className={`${feature.textColor || 'text-white'} text-sm`}>
                  {feature.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
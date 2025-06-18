"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'GALLERY IMAGE POST',
      date: '23 July 2018',
      author: 'Admin',
      category: 'Logo',
      comments: '1 Comment',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'gallery'
    },
    {
      title: 'SINGLE IMAGE POST',
      date: '23 July 2018',
      author: 'Admin',
      category: 'Logo',
      comments: '1 Comment',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'image'
    },
    {
      title: 'VIDEO POST',
      date: '23 July 2018',
      author: 'Admin',
      category: 'Logo',
      comments: '1 Comment',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'video'
    },
    {
      title: 'GALLERY IMAGE POST',
      date: '23 July 2018',
      author: 'Admin',
      category: 'Logo',
      comments: '1 Comment',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'gallery'
    }
  ];

  return (
    <section className="pb-5 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-9xl font-bold text-gray-200 select-none">NEWS</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-4xl font-bold mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Blog Post
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white overflow-hidden shadow-lg group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-yellow-400 p-3 rounded-full"
                    >
                      <Play className="w-6 h-6 text-slate-800" />
                    </motion.div>
                  </div>
                )}
                <div className="absolute top-4 right-4 text-white text-xs font-semibold">
                  {post.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                  {post.title}
                </h3>
                <div className="text-gray-500 text-xs mb-4">
                  By {post.author} in {post.category} · {post.comments}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button
                  className="text-sm text-gray-500 hover:text-yellow-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
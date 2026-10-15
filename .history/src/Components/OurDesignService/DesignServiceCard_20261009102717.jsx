import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DesignServiceCard = ({ title, description, image, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col h-full"
    >
      {/* Image Container with Smooth Zoom on Hover */}
      <NavLink
        to="/contact"
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[16/10] mb-5 bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl block"
        aria-label={`Learn more about ${title}`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Soft gradient hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Quick Action Arrow on Image */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
      </NavLink>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-primary transition-colors duration-300 tracking-tight">
          <NavLink to="/contact" className="hover:text-primary">
            {title}
          </NavLink>
        </h3>
        <p className="font-sans text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default DesignServiceCard;


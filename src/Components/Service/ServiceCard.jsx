import React from 'react'
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ Icon, Title, Para, Points, motionVariants }) => {
  const AnimatedIcon = Icon;
  return (
    <motion.div
      variants={motionVariants}
      className='flex flex-col bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[25px] shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1.5 duration-300'
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <AnimatedIcon size={46} className="sm:w-[58px] sm:h-[58px]" color="#B74B21" strokeWidth={2.25} />
      </motion.div>
      <h2 className='mb-2 sm:mb-3 mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900'>{Title}</h2>
      <p className='text-[#8A684C] text-xs sm:text-sm md:text-base mb-4 sm:mb-5 leading-relaxed text-pretty'>{Para}</p>
      <ul className='mb-6 space-y-1.5 sm:space-y-2'>
        {Points.map((Feature, index) => (
          <li className='flex items-center gap-2 text-xs sm:text-sm md:text-[17px] text-gray-700' key={index}>
            <span className='text-[#B74B21] text-xl sm:text-2xl leading-none'>•</span> {Feature}
          </li>
        ))}
      </ul>
      <NavLink
        to="/Contact"
        className='mt-auto flex justify-center items-center gap-2 border border-[#8A684C]/30 py-2.5 sm:py-3 rounded-lg hover:bg-[#B74B21] hover:text-white transition-colors cursor-pointer font-medium text-[#B74B21] text-xs sm:text-sm md:text-base'
      >
        <span>Learn More</span>
        <ArrowRight className='mt-0.5' size={16} />
      </NavLink>
    </motion.div>
  )
}

export default ServiceCard;

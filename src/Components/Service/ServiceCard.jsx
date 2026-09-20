import React from 'react'
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ Icon, Title, Para, Points, motionVariants }) => {
  const AnimatedIcon = Icon;
  return (
    <motion.div
      variants={motionVariants}
      className='flex flex-col bg-white p-8 rounded-[25px] shadow-2xl transition-transform hover:-translate-y-2 duration-300'
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <AnimatedIcon size={58} color="#B74B21" strokeWidth={2.25} />
      </motion.div>
      <h2 className='mb-3 mt-4 text-2xl font-semibold'>{Title}</h2>
      <p className='text-[#8A684C] mb-5 leading-relaxed'>{Para}</p>
      <ul className='mb-6 space-y-2'>
        {Points.map((Feature, index) => (
          <li className='flex items-center gap-2 text-[17px] text-gray-700' key={index}>
            <span className='text-[#B74B21] text-2xl'>•</span> {Feature}
          </li>
        ))}
      </ul>
      <NavLink
        to="/Contact"
        className='mt-auto flex justify-center items-center gap-2 border border-[#8A684C]/30 py-3 rounded-[7px] hover:bg-[#B74B21] hover:text-white transition-colors cursor-pointer font-medium text-[#B74B21]'
      >
        Learn More <ArrowRight className='mt-0.75' size={18} />
      </NavLink>
    </motion.div>
  )
}

export default ServiceCard;

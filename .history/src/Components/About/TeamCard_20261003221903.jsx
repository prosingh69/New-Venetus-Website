import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ data, motionVariants, isFeatured = false, isBlurred = false, className = '' }) => {
  return (
    <motion.div
      variants={motionVariants}
      className={`relative flex-col justify-center items-center p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl transition-all duration-300 text-center ${
        isBlurred
          ? 'hidden md:flex shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.06)] border border-gray-100'
          : isFeatured
          ? 'flex shadow-[0px_12px_30px_-5px_rgba(0,0,0,0.1)] border border-[#B74B21]/25 max-w-md mx-auto w-full md:max-w-none'
          : 'flex shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.08)] border border-gray-100'
      } ${className}`}
      style={
        isBlurred
          ? {
              filter: 'blur(7px)',
              opacity: 0.5,
              pointerEvents: 'none',
              userSelect: 'none',
            }
          : {}
      }
    >
      <motion.img
        src={data.Profile}
        alt={data.Name}
        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mb-3 sm:mb-4 object-cover border-4 ${
          isFeatured ? 'border-[#B74B21]/25' : 'border-[#F9F8F8]'
        }`}
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.15 }}
      />
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-1 text-gray-800'>
        {data.Name}
      </h3>
      <span
        className={`text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3 tracking-wide uppercase ${
          isFeatured ? 'text-[#B74B21]' : 'text-[#E78B30]'
        }`}
      >
        {data.Profession}
      </span>
      <p className='text-center text-[#6E4C40] text-xs sm:text-sm md:text-base leading-relaxed text-pretty'>
        {data.Detail}
      </p>
    </motion.div>
  )
}

export default TeamCard


import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ data, motionVariants, isFeatured = false, isBlurred = false }) => {
  return (
    <motion.div
      variants={motionVariants}
      className={`relative flex flex-col justify-center items-center p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl transition-all duration-300 text-center ${
        isFeatured
          ? 'shadow-[0px_15px_35px_-5px_rgba(183,75,33,0.2)] border-2 border-[#B74B21]/30 scale-[1.03] z-10'
          : 'shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.08)] border border-gray-100'
      }`}
      style={
        isBlurred
          ? {
              filter: 'blur(7px)',
              opacity: 0.55,
              pointerEvents: 'none',
              userSelect: 'none',
            }
          : {}
      }
    >
      <motion.img
        src={data.Profile}
        alt={data.Name}
        className={`rounded-full mb-3 sm:mb-4 object-cover ${
          isFeatured
            ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-[#B74B21]'
            : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-4 border-[#F9F8F8]'
        }`}
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.15 }}
      />
      <h3
        className={`font-bold mb-1 text-gray-800 ${
          isFeatured ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl md:text-2xl'
        }`}
      >
        {data.Name}
      </h3>
      <span
        className={`font-semibold mb-2 sm:mb-3 tracking-wide uppercase ${
          isFeatured
            ? 'text-[#B74B21] text-sm sm:text-base md:text-lg'
            : 'text-[#E78B30] text-xs sm:text-sm md:text-base'
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


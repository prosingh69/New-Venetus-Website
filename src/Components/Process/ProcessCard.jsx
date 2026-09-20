import React from 'react'
import { motion } from 'framer-motion'

const ProcessCard = ({ id, Name, Para, Duration, motionVariants }) => {
  return (
    <motion.div
      variants={motionVariants}
      className='p-6 sm:p-8 md:p-9 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white relative pt-8 sm:pt-9'
    >
      <span className='bg-[#E78B30] text-white py-2 sm:py-2.5 px-3.5 sm:px-4 text-xs sm:text-sm font-bold rounded-full absolute -top-3.5 sm:-top-4 -left-2 sm:-left-3 shadow-md'>
        {id}
      </span>
      <h3 className='text-xl sm:text-2xl font-bold mb-2 text-gray-900'>{Name}</h3>
      <p className='mb-3 text-[#6E4C40] text-xs sm:text-sm md:text-base leading-relaxed text-pretty'>{Para}</p>
      <span className='text-[#E78B30] text-xs sm:text-sm font-semibold tracking-wide'>Duration: {Duration}</span>
    </motion.div>
  )
}

export default ProcessCard

import React from 'react'
import { motion } from 'framer-motion'

const WhyServiceCard = ({ Data, motionVariants }) => {
  return (
    <motion.div variants={motionVariants} className='flex flex-col text-center px-2'>
      <h3 className='text-lg sm:text-xl mb-2 sm:mb-3 font-semibold text-gray-900'>{Data.Title}</h3>
      <p className='text-[#6E4C40] text-xs sm:text-sm md:text-base leading-relaxed text-pretty'>{Data.Para}</p>
    </motion.div>
  )
}

export default WhyServiceCard

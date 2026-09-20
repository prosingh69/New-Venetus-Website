import React from 'react'
import { motion } from 'framer-motion'

const WhyWorkCard = ({ Badge, Name, Para, motionVariants }) => {
  const Icons = Badge
  return (
    <motion.div
      variants={motionVariants}
      className='bg-white shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 flex flex-col justify-center items-center rounded-xl text-center border border-gray-100'
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
      >
        <Icons size={36} className="sm:w-10 sm:h-10" color="#B74B21" strokeWidth={1.75} />
      </motion.div>
      <h3 className='text-lg sm:text-xl font-semibold mt-2.5 mb-1.5 text-gray-900'>{Name}</h3>
      <p className='text-center text-[#6E4C40] text-xs sm:text-sm md:text-base leading-relaxed text-pretty'>{Para}</p>
    </motion.div>
  )
}

export default WhyWorkCard

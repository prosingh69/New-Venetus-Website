import React from 'react'
import { motion } from 'framer-motion'

const WhyCard = ({ icon, title, description, motionVariants }) => {
  const IconComponent = icon;

  return (
    <motion.div
      variants={motionVariants}
      className='group bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-100 p-5 sm:p-6 md:p-8 flex flex-col gap-2.5 sm:gap-3 transition-all duration-300 hover:-translate-y-1.5 cursor-default'
    >
      <div className='mb-2 sm:mb-3'>
        <IconComponent
          color="#C2410C"
          strokeWidth={2}
          size={36}
          className="sm:w-[42px] sm:h-[42px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <h3 className='font-bold text-lg sm:text-xl text-gray-900 tracking-tight'>
        {title}
      </h3>
      <p className='text-[#6E4C40] text-xs sm:text-sm md:text-base leading-relaxed text-pretty'>
        {description}
      </p>
    </motion.div>
  )
}

export default WhyCard

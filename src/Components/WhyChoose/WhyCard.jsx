import React from 'react'
import { motion } from 'framer-motion'

const WhyCard = ({ icon, title, description, motionVariants }) => {
  const IconComponent = icon;

  return (
    <motion.div
      variants={motionVariants}
      className='group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl border border-gray-100 p-8 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 cursor-default'
    >
      <div className='mb-3'>
        <IconComponent
          color="#C2410C"
          strokeWidth={2}
          size={42}
          className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <h3 className='font-bold text-xl text-gray-900 tracking-tight'>
        {title}
      </h3>
      <p className='text-[#6E4C40] text-sm md:text-base leading-relaxed text-pretty'>
        {description}
      </p>
    </motion.div>
  )
}

export default WhyCard

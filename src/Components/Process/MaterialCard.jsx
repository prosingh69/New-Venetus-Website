import React from 'react'
import { motion } from 'framer-motion'

const MaterialCard = ({ Name, Brands, Grades, motionVariants }) => {
  return (
    <motion.div variants={motionVariants} className='rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100'>
      <h3 className='text-lg sm:text-xl font-bold mb-1.5 text-gray-900'>{Name}</h3>
      <div className='text-[#6E4C40] text-xs sm:text-sm mb-2'>
        <span className='font-medium'>Trusted Brands: </span>
        <div className='flex flex-wrap gap-1.5 mt-1.5'>
          {Brands.map((data, index) => (
            <span key={index} className='text-[#BD4B21] rounded-full px-2.5 py-0.5 text-xs bg-[#F7EDE8] font-medium'>
              {data}
            </span>
          ))}
        </div>
      </div>
      <p className='text-[#E78B30] text-xs sm:text-sm font-semibold mt-2'>Grade: {Grades}</p>
    </motion.div>
  )
}

export default MaterialCard

import React from 'react'
import { motion } from 'framer-motion'

const MaterialCard = ({ Name, Brands, Grades, motionVariants }) => {
  return (
    <motion.div variants={motionVariants} className='rounded-2xl p-5 shadow-lg'>
      <h1 className='text-xl font-bold mb-1'>{Name}</h1>
      <h2 className='text-[#6E4C40] mb-2'>
        Trusted Brands:{' '}
        <span className='flex flex-row gap-1.5'>
          {Brands.map((data, index) => (
            <span key={index} className='text-[#BD4B21] rounded-4xl px-2 py-1 mt-1 bg-[#F7EDE8]'>{data}</span>
          ))}
        </span>
      </h2>
      <p className='text-[#F0A930] font-medium'>Grade: {Grades}</p>
    </motion.div>
  )
}

export default MaterialCard

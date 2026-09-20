import React from 'react'
import { motion } from 'framer-motion'

const ProcessCard = ({ id, Name, Para, Duration, motionVariants }) => {
  return (
    <motion.div
      variants={motionVariants}
      className='p-9 rounded-2xl shadow-xl bg-white relative'
    >
      <span className='bg-[#E78B30] py-3 px-4 font-bold rounded-full absolute -top-4 -left-4'>{id}</span>
      <h1 className='text-2xl font-bold mb-2'>{Name}</h1>
      <p className='mb-2 text-[#6E4C40]'>{Para}</p>
      <span className='text-[#E78B30] font-medium'>Duration: {Duration}</span>
    </motion.div>
  )
}

export default ProcessCard

import React from 'react'
import { motion } from 'framer-motion'

const WhyServiceCard = ({ Data, motionVariants }) => {
  return (
    <motion.div variants={motionVariants} className='flex flex-col text-center'>
      <h2 className='text-xl mb-3 font-medium'>{Data.Title}</h2>
      <p>{Data.Para}</p>
    </motion.div>
  )
}

export default WhyServiceCard

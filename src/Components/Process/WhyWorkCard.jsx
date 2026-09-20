import React from 'react'
import { motion } from 'framer-motion'

const WhyWorkCard = ({ Badge, Name, Para, motionVariants }) => {
  const Icons = Badge
  return (
    <motion.div
      variants={motionVariants}
      className='bg-white shadow-lg p-4 flex flex-col justify-center items-center rounded-xl'
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
      >
        <Icons size={40} color="#B74B21" strokeWidth={1.75} />
      </motion.div>
      <h1 className='text-xl font-semibold mt-2'>{Name}</h1>
      <p className='text-center text-[#6E4C40]'>{Para}</p>
    </motion.div>
  )
}

export default WhyWorkCard

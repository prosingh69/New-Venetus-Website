import React from 'react'
import { motion } from 'framer-motion'

const HeroCard = ({ Title, Para }) => {
  return (
    <section className='bg-[#F9F5F3] py-12 md:py-20 px-5 md:px-10 flex flex-col items-center md:items-start'>
      <motion.h1
        className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center md:text-left leading-tight'
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {Title}
      </motion.h1>
      <motion.p
        className='text-base md:text-xl text-[#6E4C40] w-full max-w-2xl lg:max-w-3xl text-center md:text-left leading-relaxed'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {Para}
      </motion.p>
    </section>
  )
}

export default HeroCard

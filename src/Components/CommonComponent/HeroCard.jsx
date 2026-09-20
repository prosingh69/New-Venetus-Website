import React from 'react'
import { motion } from 'framer-motion'

const HeroCard = ({ Title, Para }) => {
  return (
    <section className='bg-[#F9F5F3] py-8 sm:py-12 md:py-18 px-4 sm:px-6 md:px-10 flex flex-col items-center md:items-start text-center md:text-left'>
      <motion.h1
        className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left leading-tight text-balance'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {Title}
      </motion.h1>
      <motion.p
        className='text-sm sm:text-base md:text-lg lg:text-xl text-[#6E4C40] w-full max-w-2xl lg:max-w-3xl text-center md:text-left leading-relaxed text-pretty'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {Para}
      </motion.p>
    </section>
  )
}

export default HeroCard

import React from 'react'
import { motion } from 'framer-motion'

const HeroCard = ({ Title, Para }) => {
  return (
    <section className='w-full bg-[#F9F5F3] py-10 sm:py-14 md:py-18 border-b border-[#F3E5DE]/50'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex flex-col items-center md:items-start text-center md:text-left w-full'>
        <motion.h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-balance'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {Title}
        </motion.h1>
        <motion.p
          className='text-base sm:text-lg md:text-xl text-[#6E4C40] w-full max-w-2xl lg:max-w-3xl leading-relaxed text-pretty'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {Para}
        </motion.p>
      </div>
    </section>
  )
}

export default HeroCard;

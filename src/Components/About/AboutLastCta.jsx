import React, { useRef } from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const AboutLastCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section ref={ref} className='flex flex-col items-center justify-center bg-[#B74B21] py-16 md:py-24 px-5'>
      <motion.h2
        className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 text-center leading-tight'
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Let's Create Something Beautiful
      </motion.h2>
      <motion.p
        className='text-base md:text-[18px] text-white/90 mb-6 md:mb-8 text-center'
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Schedule a consultation with our team today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.82 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.5 }}
      >
        <NavLink
          to="/contact"
          className='group flex justify-center items-center gap-2 bg-white text-[#B74B21] border-2 border-white font-semibold px-6 py-3 md:px-8 md:py-3.5 cursor-pointer active:scale-95 rounded-lg shadow-lg'
        >
          Get Started
          <ArrowRight className='w-5 h-5' />
        </NavLink>
      </motion.div>
    </section>
  )
}

export default AboutLastCta

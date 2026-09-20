import React, { useRef } from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const LastCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center px-4 sm:px-6 bg-[#B74B21] py-16 sm:py-20 md:py-28 text-center'
    >
      <motion.h2
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance max-w-3xl leading-tight'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Ready to Transform Your Home?
      </motion.h2>

      <motion.p
        className='text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-8 text-center text-balance max-w-xl px-2 leading-relaxed'
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Get a free consultation with our design experts. No obligation, just honest advice.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.5 }}
        className="w-full sm:w-auto flex justify-center"
      >
        <NavLink
          to="/Contact"
          className='w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-[#B74B21] border-2 border-white font-semibold text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-3.5 cursor-pointer active:scale-97 rounded-lg shadow-lg hover:bg-orange-50 transition-all'
        >
          <span>Schedule Your Free Consultation</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </NavLink>
      </motion.div>
    </section>
  )
}

export default LastCTA

import React, { useRef } from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import LettersPullUp from '../Animations/LettersPullUp'

const LastCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-center px-2 bg-[#B74B21] py-30'
    >
      <motion.h2
        className='text-4xl font-bold text-white mb-3 text-center'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Ready to Transform Your Home?
      </motion.h2>

      <motion.p
        className='text-[18px] text-white mb-5 text-center'
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Get a free consultation with our design experts. No obligation, just honest advice.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.55 }}
      >
        <NavLink
          to="/Contact"
          className='border-2 text-[#B74B21] border-[#B74B21] flex justify-center items-center gap-2 bg-white font-semibold px-3 py-2 cursor-pointer active:scale-97 rounded-[7px]'
        >
          Schedule Your Free Consultation <ArrowRight />
        </NavLink>
      </motion.div>
    </section>
  )
}

export default LastCTA

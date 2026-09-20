import React, { useRef } from 'react'
import { ArrowRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { TypingEffect } from '../Animations/TypingEffect'

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className='bg-[#F8F6F4] py-10 sm:py-14 md:py-18 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center border-b border-[#F3E5DE] gap-8 md:gap-12 lg:gap-16'
    >

      <div className='w-full md:w-1/2 flex flex-col'>

        {/* Badge — slides down + fades in */}
        <motion.div
          className='flex justify-center md:justify-start'
          initial={{ opacity: 0, y: -18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
        >
          <span className='bg-[#F7ECE2] text-[#E88B30] py-1.5 sm:py-2 px-3 sm:px-4 rounded-full font-semibold text-xs sm:text-sm md:text-base'>
            ✓ Trusted by 500+ Families
          </span>
        </motion.div>

        {/* Heading — TypingEffect fluid font scale: text-3xl up to 66px */}
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] font-bold flex flex-col text-center md:text-left mt-4 sm:mt-6 mb-4 sm:mb-5 leading-tight lg:leading-[1.1] text-balance'>
          <TypingEffect
            text="Transform Your"
            className="text-gray-900"
            startDelay={0.2}
            charDelay={0.04}
            align="responsive-hero"
          />
          <TypingEffect
            text="Bangalore Home"
            className="text-[#9c3e1b]"
            startDelay={0.82}
            charDelay={0.04}
            align="responsive-hero"
          />
        </div>

        {/* Paragraph — single block fade-in */}
        <motion.p
          className='text-center md:text-left text-[#6E4C40] text-sm sm:text-base md:text-lg lg:text-[20px] mb-6 sm:mb-8 leading-relaxed text-pretty'
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 1.4 }}
        >
          Premium interior design with transparent pricing, guaranteed timelines, and material quality you can trust. We specialize in Bangalore apartments.
        </motion.p>

        {/* Buttons — staggered slide-up */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 1.8 }}
            className="w-full sm:w-auto flex"
          >
            <NavLink
              to="/contact"
              className='group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#9c3e1b] hover:bg-[#B74B21] border-2 border-[#9c3e1b] hover:border-[#B74B21] py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg text-white text-sm sm:text-base font-medium transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg leading-normal'
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 1.92 }}
            className="w-full sm:w-auto flex"
          >
            <NavLink
              to="/portfolio"
              className='w-full sm:w-auto inline-flex justify-center items-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg border-2 border-gray-300 text-gray-700 text-sm sm:text-base font-medium hover:border-[#9c3e1b] hover:text-[#9c3e1b] transition-all duration-300 active:scale-95 text-center leading-normal'
            >
              <span>View Portfolio</span>
            </NavLink>
          </motion.div>
        </div>

      </div>

      {/* Hero Image — smooth fade + scale */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <img
          src="https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786672515/WhatsApp_Image_2026-08-10_at_2.19.33_PM_cnokpi.jpg"
          alt="Venetus Interior Design Project"
          className="w-full max-w-md lg:max-w-lg h-72 sm:h-80 md:h-112.5 rounded-2xl object-cover object-top shadow-xl"
          loading="eager"
        />
      </motion.div>

    </section>
  )
}

export default Hero;

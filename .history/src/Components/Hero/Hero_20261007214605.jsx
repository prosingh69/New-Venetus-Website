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
      className='relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-brand-light'
    >
      {/* Background Video — optimized for zero lag & smooth playback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none"
      >
        <source src="/herosection.mp4" type="video/mp4" />
        <source src="/heorsection.mp4" type="video/mp4" />
      </video>

      {/* Transparent Black Layer / Overlay for luxury feel and masking any video artifacts */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />

      {/* Centered Content */}
      
<div className='relative z-10 max-w-4xl mx-auto px-5 md:px-10 pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 flex flex-col items-center justify-center text-center w-full'></div>
        {/* Badge */}
        <motion.div
          className='flex justify-center mb-6'
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
        >
          <span className='bg-white/10 backdrop-blur-md border border-white/20 text-accent py-2 px-5 rounded-full font-semibold text-sm md:text-base tracking-wide shadow-sm'>
            ✓ Trusted by 500+ Families
          </span>
        </motion.div>

        {/* Heading — Centered bold typography */}
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold flex flex-col items-center text-center mb-6 leading-tight lg:leading-[1.12] tracking-tight'>
          <TypingEffect
            text="Transform Your"
            className="text-white drop-shadow-md"
            startDelay={0.2}
            charDelay={0.04}
            align="center"
          />
          <TypingEffect
            text="Bangalore Home"
            className="text-accent drop-shadow-md"
            startDelay={0.82}
            charDelay={0.04}
            align="center"
          />
        </div>

        {/* Description Paragraph */}
        <motion.p
          className='text-center text-gray-200 text-base sm:text-lg md:text-[20px] max-w-2xl mx-auto mb-10 leading-relaxed font-normal text-pretty drop-shadow-sm'
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 1.4 }}
        >
          Premium interior design with transparent pricing, guaranteed timelines, and material quality you can trust. We specialize in Bangalore apartments.
        </motion.p>

        {/* Centered Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 1.8 }}
            className="w-full sm:w-auto flex"
          >
            <NavLink
              to="/contact"
              className='group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover border-2 border-primary hover:border-primary-hover py-3.5 px-8 rounded-xl text-white font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20 leading-normal'
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
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
              className="w-full sm:w-auto inline-flex justify-center items-center text-center transition-all duration-300 active:scale-95 border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white backdrop-blur-md py-3.5 px-8 rounded-xl text-white hover:text-black font-semibold leading-normal shadow-md"
            >
              <span>View Portfolio</span>
            </NavLink>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero;


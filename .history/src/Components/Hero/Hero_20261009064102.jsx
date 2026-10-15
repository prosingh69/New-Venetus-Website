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
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10'
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
        {/* Added WebM fallback from previous step for fastest loading */}
        <source src="/herosection.webm" type="video/webm" />
        <source src="/herosection.mp4" type="video/mp4" />
      </video>

      {/* Premium Radial Gradient Overlay: Center dark for text pop, edges slightly lighter to show interior */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-black/50 to-transparent pointer-events-none" />

      {/* Centered Content */}
      <div className='relative z-10 max-w-4xl mx-auto px-5 md:px-10 pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 flex flex-col items-center justify-center text-center w-full'>

        {/* Badge — Minimal glassmorphism, removed heavy borders, made uppercase */}
        <motion.div
          className='flex justify-center mb-8'
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
        >
          <span className='font-sans bg-white/5 backdrop-blur-md border border-white/10 text-[#D8A25E] py-1.5 px-5 rounded-full font-medium text-xs md:text-sm tracking-[0.15em] shadow-sm uppercase'>
            ✓ Trusted by 500+ Families
          </span>
        </motion.div>

        {/* Heading — Upgraded to a serif/premium look (font-serif) and muted accent color */}
        <div className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-semibold flex flex-col items-center text-center mb-6 leading-tight lg:leading-[1.15] tracking-tight'>
          <TypingEffect
            text="Transform Your"
            className="text-white drop-shadow-md"
            startDelay={0.2}
            charDelay={0.04}
            align="center"
          />
          <TypingEffect
            text="Bangalore Home"
            className="text-[#C67B5C] drop-shadow-lg mt-1" 
            startDelay={0.82}
            charDelay={0.04}
            align="center"
          />
        </div>

        {/* Description Paragraph — Softer contrast (text-gray-300), lighter font-weight, narrower width */}
        <motion.p
          className='font-sans text-center text-gray-300 text-base sm:text-lg md:text-[19px] max-w-xl mx-auto mb-10 leading-relaxed font-light text-pretty drop-shadow-sm'
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 1.4 }}
        >
          Premium interior design with transparent pricing, guaranteed timelines, and material quality you can trust. We specialize in Bangalore apartments.
        </motion.p>

        {/* Centered Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          {/* Primary Button — Muted terracotta/rust to match accent, removed thick border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 1.8 }}
            className="w-full sm:w-auto flex"
          >
            <NavLink
              to="/contact"
              className='font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#C67B5C] hover:bg-[#b06a4e] py-3.5 px-8 rounded-xl text-white font-medium tracking-wide transition-all duration-300 active:scale-95 shadow-lg shadow-black/30 leading-normal'
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </NavLink>
          </motion.div>

          {/* Secondary Button — Ultra-thin border (white/30) for a cleaner glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 1.92 }}
            className="w-full sm:w-auto flex"
          >
            <NavLink
              to="/portfolio"
              className="font-sans w-full sm:w-auto inline-flex justify-center items-center text-center transition-all duration-300 active:scale-95 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-md py-3.5 px-8 rounded-xl text-white font-medium tracking-wide leading-normal shadow-md"
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
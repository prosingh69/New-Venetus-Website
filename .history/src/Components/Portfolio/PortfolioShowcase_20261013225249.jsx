import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PortfolioShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Texture Image from public folder */}
      <img
        src="/blacktexture.jpg"
        alt="Venetus Interior Luxury Black Texture"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform-gpu scale-105"
        loading="eager"
      />

      {/* Cinematic Dark Overlays for depth and luxury ambiance */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Main Title — Exactly as in reference image */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-medium text-white tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-[1.28] sm:leading-[1.3] text-center max-w-3xl drop-shadow-md"
        >
          <span className="block">POOJA ROOMS FOR A</span>
          <span className="block mt-1 sm:mt-2">CONTEMPORARY HOME</span>
        </motion.h2>

        {/* Small White Center Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="w-12 sm:w-16 h-[1.5px] bg-white/80 my-4 sm:my-6 md:my-7 origin-center"
        />

        {/* Subtitle Paragraph — Exactly as in reference image */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.55 }}
          className="font-sans text-white/85 text-sm sm:text-base md:text-lg lg:text-[19px] font-light tracking-wide max-w-2xl leading-relaxed sm:leading-loose px-2 drop-shadow-sm"
        >
          Modern or classic, design a pooja room that inspires peace and reflects your personal style.
        </motion.p>
      </div>
    </section>
  )
}

export default PortfolioShowcase


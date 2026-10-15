import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image — same treatment as homepage hero video */}
      <img
        src="/premium.jpg"
        alt="Venetus Interior — Luxury Living Space"
        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu pointer-events-none scale-105"
        loading="eager"
        fetchPriority="high"
      />

      {/* Cinematic overlays — same as homepage */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

      {/* Content — shifted up to hit visual screen center (accounts for transparent navbar) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col items-center text-center -mt-6 sm:-mt-8 md:-mt-10">

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="w-10 h-px bg-primary mb-6 sm:mb-8 origin-center"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className="text-primary text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold mb-5 sm:mb-7"
        >
          About Venetus Interior
        </motion.p>

        {/* Main Quote */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          className="font-serif text-[clamp(28px,5.5vw,52px)] font-normal text-white leading-[1.2] tracking-tight mb-4 sm:mb-5"
        >
          We don't just design homes.{' '}
          <br className="hidden sm:block" />
          <span className="italic text-primary">We design the way you live.</span>
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.65 }}
          className="font-sans text-white/70 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl"
        >
          12 years of bespoke craftsmanship, in-house execution, and timeless design — all backed by up to a 10-year warranty.
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
          className="w-10 h-px bg-primary mt-6 sm:mt-8 origin-center"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-px h-7 sm:h-9 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

export default AboutHero

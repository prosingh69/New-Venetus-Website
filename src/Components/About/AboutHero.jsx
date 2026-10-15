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

      {/* Content — Shifted up on mobile to hit exact visual screen center below navbar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-10 md:px-16 flex flex-col items-center text-center -mt-8 sm:-mt-4 md:mt-2 lg:mt-4">

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="w-10 h-px bg-primary mb-3.5 sm:mb-6 md:mb-8 origin-center"
        />

        {/* Label — exact match with PortfolioHero */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className="text-primary text-[10px] sm:text-xs tracking-[0.22em] uppercase font-semibold mb-3 sm:mb-5 md:mb-7"
        >
          About Venetus Interior
        </motion.p>

        {/* Main Title — Mobile View: 2 Lines (Line 1 White, Line 2 Gold) - exact match with PortfolioHero */}
        <div className="md:hidden flex flex-col items-center text-center mb-3.5 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-[clamp(28px,7.8vw,44px)] min-[390px]:text-[clamp(32px,8.6vw,44px)] font-medium text-white tracking-tight leading-[1.12] drop-shadow-md whitespace-nowrap"
          >
            Crafting Timeless Homes
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-1"
          >
            <span className="font-heading italic text-[clamp(24px,6.2vw,36px)] min-[390px]:text-[clamp(26px,6.8vw,36px)] font-medium text-primary tracking-tight leading-[1.18] drop-shadow-md block whitespace-nowrap">
              Shaped Around Your Life
            </span>
          </motion.div>
        </div>

        {/* Main Title — Desktop View: Grand Editorial Title - exact match with PortfolioHero */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          className="hidden md:block font-heading text-4xl lg:text-5xl xl:text-[54px] font-medium text-white leading-[1.2] tracking-tight mb-5 max-w-4xl"
        >
          <span className="block whitespace-nowrap">
            We don't just design homes.
          </span>
          <span className="block font-heading italic font-medium text-primary mt-1.5 whitespace-nowrap drop-shadow-[0_2px_14px_rgba(212,165,58,0.25)]">
            We design the way you live.
          </span>
        </motion.h1>

        {/* Sub-line — exact match with PortfolioHero typography */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.65 }}
          className="font-body text-white/75 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl mx-auto px-1 sm:px-0"
        >
          Started in 2023 with bespoke craftsmanship, in-house execution, and timeless design — all backed by up to a 10-year warranty.
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
          className="w-10 h-px bg-primary mt-4 sm:mt-6 md:mt-8 origin-center"
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

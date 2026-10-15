import React, { useRef } from 'react'
import { ArrowRight, ChevronRight, Sparkle } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const AboutHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { openModal } = useConsultationModal()

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        src="/premium.jpg"
        alt="Venetus Interior — Luxury Living Space"
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none scale-105"
        loading="eager"
        fetchPriority="high"
      />

      {/* Cinematic Overlays — same as homepage */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/55 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-center pt-20 sm:pt-28 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:pb-20 text-center md:text-left">

        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="mb-3.5 sm:mb-6 flex items-center justify-center md:justify-start"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium shadow-sm">
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap shrink-0">
              Est. 2012
            </span>
            <span className="text-white/95">Bangalore's Bespoke Interior Studio</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 shrink-0" />
          </div>
        </motion.div>

        {/* Mobile Title */}
        <div className="md:hidden flex flex-col items-center text-center mb-2.5 sm:mb-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-[clamp(32px,8.6vw,44px)] font-normal text-white tracking-tight leading-[1.12] drop-shadow-md"
          >
            The Studio Behind
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mt-1"
          >
            <span className="font-serif italic text-[clamp(26px,6.8vw,36px)] font-normal text-primary tracking-tight leading-[1.18] drop-shadow-md">
              Every Dream Home
            </span>

            {/* Curved gold underline — same as homepage */}
            <svg
              viewBox="0 0 260 12"
              fill="none"
              className="w-[clamp(200px,58vw,290px)] h-2.5 sm:h-3 mt-1 text-primary/80 pointer-events-none"
            >
              <path
                d="M2 9C70 2 190 2 258 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex mb-6 sm:mb-8 max-w-4xl flex-col items-start text-left mx-0">
          {/* Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="font-sans text-white md:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight leading-[1.05] drop-shadow-md"
          >
            The Studio Behind
          </motion.h1>

          {/* Line 2 — Stylized Ampersand + Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.45 }}
            className="flex items-baseline gap-0 -mt-2"
          >
            <span className="font-serif italic font-normal text-primary md:text-7xl lg:text-[84px] xl:text-[94px] leading-none drop-shadow-md select-none inline-block align-baseline">
              &amp;
            </span>
            <span className="font-sans font-bold text-white md:text-4xl lg:text-[50px] xl:text-[56px] tracking-tight leading-[1.05] drop-shadow-md align-baseline">
              Every Dream Home
            </span>
          </motion.div>
        </div>

        {/* Bottom Row — Description + Buttons */}
        <div className="w-full relative pt-0 sm:pt-2">

          {/* Desktop Accent Stars */}
          <div className="hidden md:flex w-full items-center justify-between pointer-events-none mb-4 sm:mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-white/75"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-white/75 pr-0 md:pr-4"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
          </div>

          {/* Content Row */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
              className="max-w-md lg:max-w-lg text-center md:text-left mx-auto md:mx-0"
            >
              <p className="font-sans text-white/85 text-[13px] min-[390px]:text-[14px] sm:text-sm md:text-[15px] leading-relaxed font-normal drop-shadow-sm px-0.5 sm:px-0">
                For over 12 years, we've turned empty spaces into dream homes — blending thoughtful design, factory-grade craftsmanship, and complete transparency. Every project is personal. Every finish is intentional.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-3.5 w-full sm:w-auto shrink-0 relative pr-0 md:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.25 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <button
                  type="button"
                  onClick={() => openModal({
                    title: 'Book a Free Design Consultation',
                    subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
                  })}
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 shrink-0 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.4 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/portfolio"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-md shrink-0"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-neutral-700" />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — same as homepage */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.7 }}
      >
        <motion.div
          className="w-px h-7 sm:h-8 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export default AboutHero


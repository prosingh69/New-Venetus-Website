import React, { useRef } from 'react'
import { ArrowRight, ChevronDown, ShieldCheck, Clock, Palette, Sparkles } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const ServiceHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { openModal } = useConsultationModal()

  const scrollToServices = () => {
    const el = document.getElementById('services-grid')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none scale-105"
      >
        <source src="/herosection2.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays for Legibility & Contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-[#5C2A0A]/15 pointer-events-none" />

      {/* Hero Content — Centered & Visually Balanced */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 flex flex-col items-center text-center mt-3 sm:mt-5 md:mt-6">

        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mb-3.5 sm:mb-5"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium shadow-sm">
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase shrink-0">
              Services
            </span>
            <span className="text-white/95 truncate">End-to-End Interior Solutions in Bangalore</span>
            <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
          </div>
        </motion.div>

        {/* Main Heading with Serif Accent & Curved Gold Underline */}
        <div className="flex flex-col items-center mb-3 sm:mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-sans text-[clamp(28px,6.8vw,56px)] font-bold text-white tracking-tight leading-[1.1] drop-shadow-md"
          >
            Bespoke Interior Solutions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex flex-col items-center mt-1 sm:mt-1.5"
          >
            <span className="font-serif italic text-[clamp(26px,6vw,50px)] font-normal text-primary tracking-tight leading-[1.15] drop-shadow-md">
              Tailored Around Your Lifestyle
            </span>

            {/* Subtle Curved Gold Underline */}
            <svg
              viewBox="0 0 260 12"
              fill="none"
              className="w-[clamp(210px,55vw,320px)] h-2.5 sm:h-3 mt-1 sm:mt-1.5 text-primary/80 pointer-events-none"
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

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans text-white/85 text-[13px] sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal drop-shadow-sm mb-6 sm:mb-8 px-2"
        >
          From ergonomic modular kitchens and luxury living spaces to complete turnkey home interiors. Factory-grade precision, customized finishes, and up to a 10-year warranty.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
        >
          <button
            type="button"
            onClick={() => openModal({
              title: 'Book a Free Service Consultation',
              subtitle: 'Tell us about your space. Our senior design team will discuss layouts, 3D renders, and an exact budget quote.'
            })}
            className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </button>

          <button
            type="button"
            onClick={scrollToServices}
            className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 shrink-0" />
          </button>
        </motion.div>

        {/* Feature Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl"
        >
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">10-Year Warranty</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-[11px] sm:text-xs">
            <Palette className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">Custom 3D Designs</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-[11px] sm:text-xs">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">45-Day Handover</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-[11px] sm:text-xs">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">Zero Hidden Costs</span>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none cursor-pointer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <motion.div
          className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

export default ServiceHero


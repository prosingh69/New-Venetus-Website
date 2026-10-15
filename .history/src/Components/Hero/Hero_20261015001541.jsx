import React, { useRef, useEffect } from 'react'
import { ArrowRight, ChevronRight } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'
import TrustBelt from '../TrustBelt/TrustBelt'

/* ─── Panel 1 — Heading + Tag + Centered Description & Action Buttons (100vh Full Viewport) ─── */
const HeroPanel1 = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { openModal } = useConsultationModal();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        key="hero-architectural-suites-video"
        src="/architectural-suites.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none scale-105"
      >
        <source src="/architectural-suites.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays for High Legibility & Full Vertical Screen View */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

      {/* Content — Centered in the exact center of the window across Mobile, Tablet & Desktop */}
      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center">

        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="mb-4 sm:mb-6 md:mb-7 flex items-center justify-center"
        >
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-neutral-900/60 hover:bg-neutral-900/80 backdrop-blur-md border border-white/20 hover:border-primary/40 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98 max-w-[94%] sm:max-w-none"
          >
            <span className="bg-primary text-neutral-950 text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap shrink-0 shadow-sm">
              Flexible
            </span>
            <span className="text-white/95 truncate">Luxury Interiors Within Your Budget</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </NavLink>
        </motion.div>

        {/* Unified Title: Serif + italic gold + curved underline */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-display font-medium text-white tracking-[-0.02em] leading-[1.05] text-balance drop-shadow-md"
          >
            Your Dream Interiors
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col items-center mt-1.5 sm:mt-2.5"
          >
            <span className="font-heading italic text-[clamp(1.9rem,4.8vw,3.8rem)] font-medium text-[#E9C27A] tracking-[-0.02em] leading-[1.15] drop-shadow-md">
              Designed Within Your Budget
            </span>

            {/* Subtle curved gold underline */}
            <svg
              viewBox="0 0 260 12"
              fill="none"
              className="w-[clamp(230px,44vw,480px)] h-2.5 sm:h-3 md:h-3.5 mt-1 sm:mt-1.5 text-primary/80 pointer-events-none"
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

        {/* Action Buttons — Symmetrical Center Stack on mobile, Row on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.45 }}
            className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
          >
            <button
              type="button"
              onClick={() => openModal({
                title: 'Book a Free Design Consultation',
                subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
              })}
              className="font-body group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-neutral-950 py-3 sm:py-3.5 px-6 sm:px-8 rounded-full btn-text font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 shrink-0 cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-neutral-950" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.55 }}
            className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
          >
            <NavLink
              to="/portfolio"
              className="font-body group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 text-white py-3 sm:py-3.5 px-6 sm:px-8 rounded-full btn-text font-semibold transition-all duration-300 active:scale-95 shadow-md border border-white/25 hover:border-primary/50 shrink-0 backdrop-blur-md"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-white/80" />
            </NavLink>
          </motion.div>
        </div>

      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.95 }}
      >
        <motion.div
          className="w-px h-7 sm:h-8 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Panel 2 — Second Video + Description + Seamless Blended Trust Counters ─── */
const HeroPanel2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black"
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

      {/* Cinematic dark ambient overlay that smoothly melts into pure black */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 pointer-events-none" />

      {/* Top spacer to ensure balanced vertical breathing room */}
      <div className="w-full pt-10 sm:pt-14 md:pt-16 shrink-0" />

      {/* Center Statement & Tagline */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center my-auto mb-2 md:mb-4">
        {/* Decorative subtle accent bar */}
        <motion.div
          className="hidden sm:block w-12 h-px bg-primary/70 mb-5 sm:mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />

        {/* Main statement in clean geometric font */}
        <motion.p
          className="font-body text-body-lg centered-body text-[#E5E5E5] font-normal leading-[1.7] tracking-[-0.01em] text-pretty mb-4 sm:mb-6 drop-shadow-sm max-w-[65ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
        >
          20+ homes crafted since 2024 — modular kitchens, living spaces & full interiors, backed by up to 10-year warranty. Every material sourced and executed in-house.
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          className="font-body text-label-caps text-[#F2C572] font-semibold tracking-[0.22em] uppercase mb-5 sm:mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
        >
          Venetus Interior · Bangalore Living
        </motion.p>

        {/* Decorative subtle accent bar */}
        <motion.div
          className="w-12 h-px bg-primary/70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.85 }}
        />
      </div>

      {/* Seamless Blended Trust Belt — With subtle gap in window view & blended pure black background on mobile */}
      <div className="relative z-10 w-full mt-3 sm:mt-5 md:mt-8">
        {/* Mobile top blend: smoothly dissolves video into pure black background */}
        <div className="md:hidden absolute -top-16 inset-x-0 h-16 bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none" />

        {/* Counter Area: Pure black on mobile, smooth gradient fade on desktop with refined breathing room */}
        <div className="w-full bg-black md:bg-transparent pb-8 sm:pb-12 md:pb-14 pt-3 sm:pt-4 md:pt-8 md:bg-gradient-to-t md:from-black md:via-black/85 md:to-transparent">
          <TrustBelt embedded={true} />
        </div>
      </div>
    </div>
  );
};

/* ─── Hero — Combines Both Viewport Panels ──────────────────────────── */
const Hero = () => {
  return (
    <section className="w-full bg-black border-none">
      <HeroPanel1 />
      <HeroPanel2 />
    </section>
  );
};

export default Hero;

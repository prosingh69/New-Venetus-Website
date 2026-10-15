import React, { useRef } from 'react';
import { ArrowRight, ChevronRight, Sparkle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { TypingEffect } from '../Animations/TypingEffect';

/**
 * LocationHero - Specialized Hero for local SEO landing pages.
 * - Video is removed; replaced with premium high-res interior background image.
 * - Second hero panel is removed.
 * - Title, badge, and description are dynamically customized for the location.
 */
const LocationHero = ({ locationName = 'Indiranagar', bgImage = '/design.jpg' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Image with Slow Ambient Scale */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src={bgImage}
          alt={`Luxury Interior Designers in ${locationName}, Bangalore`}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Cinematic Overlays for High Legibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-center pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 text-center md:text-left">
        
        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="mb-4 sm:mb-6 flex items-center justify-center md:justify-start"
        >
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98"
          >
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full tracking-wide uppercase">
              {locationName}
            </span>
            <span className="text-white/95">Luxury Interiors in {locationName}, Bangalore</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
          </NavLink>
        </motion.div>

        {/* Dynamic 2-Line Headline for Location */}
        <div className="mb-6 sm:mb-8 max-w-4xl flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
          {/* Line 1 */}
          <div className="w-full flex justify-center md:justify-start">
            <TypingEffect
              text={`Interior Designers in`}
              className="font-sans text-white text-[27px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight leading-[1.05] drop-shadow-md"
              startDelay={0.15}
              charDelay={0.035}
              align="responsive-hero"
              nowrap={false}
            />
          </div>

          {/* Line 2 — Stylized Serif Ampersand + Location Name */}
          <div className="w-full flex justify-center md:justify-start -mt-1 sm:-mt-1.5 md:-mt-2">
            <TypingEffect
              segments={[
                {
                  text: '&',
                  className: 'font-serif italic font-normal text-accent text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[84px] xl:text-[94px] leading-none mr-2 sm:mr-3 drop-shadow-md select-none inline-block align-baseline'
                },
                {
                  text: `${locationName}`,
                  className: 'font-sans font-bold text-white text-[27px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] tracking-tight leading-[1.05] drop-shadow-md align-baseline'
                }
              ]}
              startDelay={0.7}
              charDelay={0.035}
              align="responsive-hero"
              itemsAlign="items-baseline"
              nowrap={false}
            />
          </div>
        </div>

        {/* Bottom Split Row — Description on Left, Action Buttons on Right */}
        <div className="w-full relative pt-1 sm:pt-2">
          
          {/* Accent Stars Framing */}
          <div className="hidden md:flex w-full items-center justify-between pointer-events-none mb-4 sm:mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-white/75"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-white/75 pr-0 md:pr-4"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
          </div>

          {/* Mobile Star */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="md:hidden flex justify-center items-center mb-3 text-white/75 pointer-events-none"
          >
            <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
          </motion.div>

          {/* Description & Buttons */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
              className="max-w-md lg:max-w-lg text-center md:text-left mx-auto md:mx-0"
            >
              <p className="font-sans text-white/85 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal drop-shadow-sm px-2 sm:px-0">
                Transform your {locationName} residence with Venetus Interior. From modular kitchens to full turnkey luxury homes, we craft bespoke living spaces tailored around your lifestyle and budget — backed by up to 10-year warranty.
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-3.5 w-full sm:w-auto shrink-0 relative pr-0 md:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.65 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/contact"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 shrink-0"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.75 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/portfolio"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-md shrink-0"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-neutral-700" />
                </NavLink>
              </motion.div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <motion.div
          className="w-px h-7 sm:h-8 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default LocationHero;


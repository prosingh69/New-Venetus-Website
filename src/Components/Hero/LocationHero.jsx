import React, { useRef } from 'react';
import { ArrowRight, ChevronRight, Building2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useConsultationModal } from '../../context/ConsultationModalContext';
import TrustBelt from '../TrustBelt/TrustBelt';

/**
 * LocationHeroPanel1 — First Viewport Panel
 * - Exact Homepage Hero design & typography (centered, serif + italic gold + curved underline)
 * - Tailored for the specific location name
 * - Action buttons trigger consultation modal for this location
 */
const LocationHeroPanel1 = ({ locationName = 'Bangalore', bgImage = '/design.jpg' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { openModal } = useConsultationModal();

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Ambient Scale */}
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

      {/* Cinematic Overlays for High Legibility & Full Vertical Screen View */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

      {/* Content — Centered in the exact optical center of the window across Mobile, Tablet & Desktop (Exact Homepage Layout) */}
      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-3 xs:px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center pt-8 sm:pt-0">

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
              {locationName}
            </span>
            <span className="text-white/95 truncate">
              <span className="sm:hidden">Luxury Home Interiors</span>
              <span className="hidden sm:inline">Luxury Interiors in {locationName}, Bangalore</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </NavLink>
        </motion.div>

        {/* Unified Title: Serif + italic gold + curved underline (Exact Homepage Styling) */}
        {/* On mobile: Strictly TWO single lines (Line 1: White, Line 2: Gold italic), maximized responsive font, no line wrap */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 w-full px-2">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading font-medium text-white tracking-[-0.02em] leading-[1.08] drop-shadow-md whitespace-nowrap text-[clamp(1.75rem,8.6vw,5.2rem)]"
          >
            Interior Designers in
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col items-center mt-1.5 sm:mt-2.5 w-full"
          >
            <span className="font-heading italic font-medium text-[#E9C27A] tracking-[-0.02em] leading-[1.15] drop-shadow-md whitespace-nowrap text-[clamp(1.4rem,7vw,3.8rem)]">
              {locationName}
            </span>

            {/* Subtle curved gold underline */}
            <svg
              viewBox="0 0 260 12"
              fill="none"
              className="w-[clamp(210px,66vw,460px)] h-2 sm:h-2.5 md:h-3.5 mt-1 sm:mt-1.5 text-primary/80 pointer-events-none"
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
              onClick={() =>
                openModal({
                  title: `Book Free Consultation in ${locationName}`,
                  subtitle: `Transform your ${locationName} residence with bespoke luxury designs & transparent pricing.`,
                  projectLocation: locationName
                })
              }
              className="font-body group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-neutral-950 py-3 sm:py-3.5 px-6 sm:px-8 rounded-full btn-text font-semibold transition-all duration-300 active:scale-95 shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 shrink-0 cursor-pointer"
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

/**
 * LocationHeroPanel2 — Second Hero Viewport Panel
 * - Exactly structured with flex-col justify-between to guarantee TrustBelt is at the bottom
 * - Background cinematic video with dark gradient melt
 * - Hyper-local statement, key societies badges, and sub-tagline
 */
const LocationHeroPanel2 = ({ locConfig, locationName = 'Bangalore' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const statement =
    locConfig?.secondHeroStatement ||
    `Leading interior designers in ${locationName}, Bangalore crafting bespoke modular kitchens, luxury living spaces & turnkey home interiors. 40+ homes crafted since 2023 with up to 10-year warranty.`;
  const highlightProject = locConfig?.highlightProject;
  const apartments = locConfig?.apartments || [];
  const subTag = locConfig?.subTag || `${locationName} Living`;

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
      <div className="absolute inset-0 bg-[#5C2A0A]/18 pointer-events-none" />

      {/* Center Statement & Tagline — Flex-1 to vertically center in the screen above TrustBelt */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 flex-1 flex flex-col items-center justify-center text-center pt-16 sm:pt-14 pb-4 sm:pb-6">
        
        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          className="mb-4 sm:mb-6 flex items-center justify-center w-full px-4"
        >
          <NavLink
            to="/portfolio"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98"
          >
            <span className="bg-primary text-neutral-950 text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap shrink-0">
              {locationName}
            </span>
            <span className="text-white/95">
              <span className="sm:hidden">
                {locConfig?.apartments?.[0] ? `${locConfig.apartments[0]} Projects` : `Luxury Interiors`}
              </span>
              <span className="hidden sm:inline">
                {highlightProject || `Luxury Interiors in ${locationName}, Bangalore`}
              </span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </NavLink>
        </motion.div>

        {/* Decorative subtle accent bar */}
        <motion.div
          className="w-12 sm:w-16 h-px bg-primary/70 mb-4 sm:mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />

        {/* Main statement with larger, highly legible font on mobile */}
        <motion.p
          className="font-body text-[17px] sm:text-xl md:text-2xl text-white/95 font-normal leading-[1.65] sm:leading-[1.7] tracking-normal text-pretty mb-4 sm:mb-6 drop-shadow-md max-w-[42ch] sm:max-w-[55ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
        >
          {statement}
        </motion.p>

        {/* Apartment Societies Badges List */}
        {apartments && apartments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-7 max-w-2xl font-body"
          >
            <span className="text-gray-400 text-xs sm:text-sm font-medium mr-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              Key Societies:
            </span>
            {apartments.map((apt, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-3.5 py-1 rounded-full bg-[#161616] border border-[#2b2b2b] text-gray-300 hover:text-white hover:border-primary/50 text-xs sm:text-[13px] font-medium transition-colors"
              >
                {apt}
              </span>
            ))}
          </motion.div>
        )}

        {/* Sub-tagline */}
        <motion.p
          className="font-body text-label-caps text-[#F2C572] font-semibold tracking-[0.22em] uppercase mb-5 sm:mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
        >
          Venetus Interior · {subTag}
        </motion.p>

        {/* Decorative subtle accent bar */}
        <motion.div
          className="w-12 h-px bg-primary/70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.85 }}
        />
      </div>

      {/* Seamless Blended Trust Belt — Centered at the BOTTOM of the section */}
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

/**
 * LocationHero — Combines Both Viewport Panels exactly like Homepage Hero
 */
const LocationHero = ({ locConfig, locationName, bgImage }) => {
  const name = locConfig?.name || locationName || 'Bangalore';
  const image = locConfig?.image || bgImage || '/design.jpg';

  return (
    <section className="w-full bg-black border-none">
      <LocationHeroPanel1 locationName={name} bgImage={image} />
      <LocationHeroPanel2 locConfig={locConfig} locationName={name} />
    </section>
  );
};

export default LocationHero;

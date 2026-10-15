import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter"
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const PortfolioTrust = () => {
  return (
    <section className="relative w-full aspect-[16/9] min-h-[260px] max-h-[85vh] flex items-center justify-center overflow-hidden bg-black border-y border-white/10">
      {/* Background black texture image in 16:9 ratio from public folder */}
      <img
        src="/blacktexture.jpg"
        alt="Venetus Interior Luxury Black Texture"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform-gpu scale-105"
        loading="eager"
      />

      {/* Subtle cinematic overlays for depth & texture visibility */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex flex-col items-center justify-center text-center py-6 sm:py-10">
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-10 h-px bg-primary mb-2.5 sm:mb-4 origin-center"
        />

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary text-[10px] sm:text-xs md:text-sm tracking-[0.22em] uppercase font-semibold mb-4 sm:mb-6 md:mb-8"
        >
          Craftsmanship In Numbers
        </motion.p>

        {/* Stats Grid — Testimonial (Average Rating) removed as requested */}
        <motion.div
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center px-2">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-1 drop-shadow-md">
              <AnimatedCounter endValue={500} suffix="+" duration={2000} />
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium text-white/90 leading-tight">
              Projects Completed
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center px-2">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-1 drop-shadow-md">
              10-Yr
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium text-white/90 leading-tight">
              Warranty Assured
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-center px-2">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-1 drop-shadow-md">
              <AnimatedCounter endValue={15} suffix="+" duration={2000} />
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-medium text-white/90 leading-tight">
              Years Experience
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-10 h-px bg-primary mt-4 sm:mt-6 md:mt-8 origin-center"
        />
      </div>
    </section>
  );
};

export default PortfolioTrust;

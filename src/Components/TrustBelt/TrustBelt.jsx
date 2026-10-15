import React from 'react';
import AnimatedCounter from "./AnimatedCounter";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const TrustBelt = ({ embedded = false }) => {
  return (
    <div
      className={
        embedded
          ? "w-full py-2 sm:py-4 px-4 md:px-10 lg:px-16 relative overflow-hidden"
          : "w-full bg-gradient-to-b from-black via-[#111113] to-black py-8 sm:py-12 md:py-14 px-4 md:px-10 lg:px-20 relative overflow-hidden"
      }
    >
      {/* Subtle background ambient glow for non-embedded */}
      {!embedded && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      )}

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="font-body text-stats-num tracking-[-0.04em] leading-none text-[#F2C572]">
            <AnimatedCounter endValue={12} suffix="+" duration={2000} />
          </span>
          <span className="font-body text-stats-label text-[#EAEAEA] text-balance tracking-[0.02em] drop-shadow-sm">
            Years Of Experience
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="font-body text-stats-num tracking-[-0.04em] leading-none text-[#F2C572]">
            <AnimatedCounter endValue={40} suffix="+" duration={2000} />
          </span>
          <span className="font-body text-stats-label text-[#EAEAEA] text-balance tracking-[0.02em] drop-shadow-sm">
            Projects Completed
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="font-body text-stats-num tracking-[-0.04em] leading-none text-[#F2C572]">
            <AnimatedCounter endValue={99.9} decimals={1} suffix="%" duration={2000} />
          </span>
          <span className="font-body text-stats-label text-[#EAEAEA] text-balance tracking-[0.02em] drop-shadow-sm">
            On-Time Delivery
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="font-body text-stats-num tracking-[-0.04em] leading-none text-[#F2C572]">
            <AnimatedCounter endValue={10} suffix="Yrs" duration={2000} />
          </span>
          <span className="font-body text-stats-label text-[#EAEAEA] text-balance tracking-[0.02em] drop-shadow-sm">
            Warranty Guarantee
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TrustBelt;

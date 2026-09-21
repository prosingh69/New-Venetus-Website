import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter"
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const PortfolioTrust = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-[#F9F8F8] border-b border-[#F3E5DE]">
      <motion.div
        className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-[11px] sm:text-xs md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">
            Projects Completed
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={4.9} suffix='/5' duration={2000} decimals={1} />
          </span>
          <span className="text-[11px] sm:text-xs md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">
            Average Rating
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[11px] sm:text-xs md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">
            Years Experience
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioTrust;

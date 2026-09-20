import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter"
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const PortfolioTrust = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-12 lg:px-32 bg-[#F9F8F8]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-3 lg:flex lg:justify-between gap-y-8 gap-x-2 lg:gap-x-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-[12px] sm:text-[15px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Project Completed</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={4.9} suffix='/5' duration={2000} decimals={1} />
          </span>
          <span className="text-[12px] sm:text-[15px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Average Rating</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center">
          <span className="text-[26px] sm:text-3xl md:text-4xl font-bold text-[#B74B21] tracking-tight mb-1">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[12px] sm:text-[15px] md:text-[18px] ubuntu-medium text-gray-700 leading-tight">Years Experience</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioTrust;

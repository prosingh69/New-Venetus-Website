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

const TrustBelt = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-10 lg:px-20 border-b border-[#F3E5DE]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 md:gap-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E86321] tracking-tight mb-1 sm:mb-2">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-[18px] ubuntu-medium text-[#9C3E1B] text-balance">
            Years Of Experience
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E86321] tracking-tight mb-1 sm:mb-2">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-[18px] ubuntu-medium text-[#9C3E1B] text-balance">
            Project Completed
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E86321] tracking-tight mb-1 sm:mb-2">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-[18px] ubuntu-medium text-[#9C3E1B] text-balance">
            On-Time Delivery
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full px-1">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E86321] tracking-tight mb-1 sm:mb-2">
            <AnimatedCounter endValue={10} suffix="Yrs" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-[18px] ubuntu-medium text-[#9C3E1B] text-balance">
            Warranty Guarantee
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TrustBelt;

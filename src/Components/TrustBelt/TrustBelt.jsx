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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const TrustBelt = () => {
  return (
    <div className="py-12 px-4 md:p-20 border-b border-[#F3E5DE]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#E86321] tracking-tight mb-2">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-[#9C3E1B]">Years Of Experience</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#E86321] tracking-tight mb-2">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-[#9C3E1B]">Project Completed</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#E86321] tracking-tight mb-2">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-[#9C3E1B]">On-Time Delivery</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center w-full">
          <span className="text-5xl md:text-6xl font-bold text-[#E86321] tracking-tight mb-2">
            <AnimatedCounter endValue={10} suffix="Yrs" duration={2000} />
          </span>
          <span className="text-[16px] md:text-[18px] ubuntu-medium text-[#9C3E1B]">Warranty Guarantee</span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TrustBelt;

import React from 'react';
import AnimatedCounter from "../TrustBelt/AnimatedCounter";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ClientTrustBelt = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-12 lg:px-24 bg-surface-soft border-b border-brand-light">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-3 sm:gap-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-1">
            <AnimatedCounter endValue={500} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Happy Families</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-1">
            <AnimatedCounter endValue={4.9} suffix='/5' duration={2000} decimals={1} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Average Rating</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-1">
            <AnimatedCounter endValue={100} suffix="%" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Satisfaction Rate</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-start text-center px-1">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight mb-1">
            <AnimatedCounter endValue={15} suffix="+" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm md:text-base ubuntu-medium text-gray-700 leading-tight text-balance">Years Trusted</span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ClientTrustBelt;

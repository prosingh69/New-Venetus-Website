import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ data, motionVariants, isFeatured = false, isBlurred = false, className = '' }) => {
  return (
    <motion.div
      variants={motionVariants}
      className={`relative flex-col justify-center items-center p-7 sm:p-8 md:p-9 bg-[#151518] rounded-[24px] border border-white/[0.07] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 text-center ${
        isBlurred
          ? 'hidden md:flex opacity-35'
          : 'flex max-w-md mx-auto w-full md:max-w-none'
      } ${className}`}
      style={
        isBlurred
          ? {
              filter: 'blur(7px)',
              pointerEvents: 'none',
              userSelect: 'none',
            }
          : {}
      }
    >
      {/* Photo with subtle 1px hairline gold ring (no thick border/ring) */}
      <div className="w-20 h-20 rounded-full p-[2px] bg-[#E9C27A]/30 mb-4 flex items-center justify-center shrink-0">
        <motion.img
          src={data.Profile}
          alt={data.Name}
          className="w-full h-full rounded-full object-cover bg-[#121214]"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.15 }}
        />
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-medium mb-1 text-white tracking-tight">
        {data.Name}
      </h3>

      <span className="font-body text-[11px] font-semibold mb-3 tracking-[0.2em] uppercase text-[#E9C27A]">
        {data.Profession}
      </span>

      <p className="font-body text-center text-[#D4D4D8]/80 text-xs sm:text-[13.5px] leading-[1.65] text-pretty max-w-sm">
        {data.Detail}
      </p>
    </motion.div>
  )
}

export default TeamCard


import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const AboutLastCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      ref={ref}
      className="w-full bg-primary py-14 sm:py-18 md:py-22 px-4 sm:px-6 md:px-8 text-center overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title — single line on window/desktop, matching section heading font */}
        <motion.h2
          className="font-sans text-2xl xs:text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center md:whitespace-nowrap drop-shadow-sm max-w-4xl px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Let's Create Something Beautiful
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          className="font-sans text-xs sm:text-sm md:text-base text-white/95 mb-7 sm:mb-8 text-center max-w-xl leading-relaxed px-2 drop-shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Schedule an in-person design consultation with our senior architects in Bangalore. Transparent pricing & 10-year warranty.
        </motion.p>

        {/* Action Button — White luxury pill button on primary background */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full sm:w-auto flex justify-center"
        >
          <NavLink
            to="/contact"
            className="group w-full sm:w-auto max-w-xs sm:max-w-none inline-flex justify-center items-center gap-2 bg-white text-primary hover:bg-neutral-100 font-semibold text-xs sm:text-sm md:text-base py-3 sm:py-3.5 px-7 sm:px-8 rounded-full shadow-lg shadow-black/10 transition-all duration-300 active:scale-95 shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLastCta;

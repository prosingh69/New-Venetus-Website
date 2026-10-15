import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const LastCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const { openModal } = useConsultationModal();

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#E9C27A] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 text-center overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: '#E9C27A' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h2
          className="font-heading text-h2 font-medium !text-[#121214] tracking-[-0.02em] leading-[1.15] mb-4 text-center max-w-4xl px-2 text-balance"
          style={{ color: '#121214' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Ready to Transform Your Home?
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          className="font-body text-[15px] sm:text-[16px] md:text-[17px] !text-[#121214]/70 leading-[1.65] mb-8 sm:mb-10 text-center max-w-xl mx-auto px-2 text-pretty"
          style={{ color: 'rgba(18, 18, 20, 0.75)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Get a free consultation with our design experts in Bangalore. Honest advice, personalized 3D design concepts, and transparent pricing.
        </motion.p>

        {/* Action Button — Premium Black button on gold background */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full sm:w-auto flex justify-center"
        >
          <button
            type="button"
            onClick={() => openModal({
              title: 'Schedule Your Free Consultation',
              subtitle: 'Get free, honest interior advice, personalized 3D design concepts & transparent itemized pricing.'
            })}
            className="font-body btn-text group w-full sm:w-auto max-w-xs sm:max-w-none inline-flex justify-center items-center gap-3 bg-neutral-950 hover:bg-black text-white font-semibold py-3.5 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl shadow-black/25 hover:shadow-black/40 transition-all duration-300 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Schedule Your Free Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0 text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LastCTA;

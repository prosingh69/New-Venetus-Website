import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

// The 4 items matching The KariGhars content & data structure
const leftColumnData = [
  {
    id: 'tailored',
    title: 'Tailored Solutions',
    description: 'Personalized designs that reflect your style and preferences.'
  },
  {
    id: 'craftsmanship',
    title: 'Quality Craftsmanship',
    description: 'Top-notch materials and skilled execution for lasting elegance.'
  }
];

const rightColumnData = [
  {
    id: 'end-to-end',
    title: 'End-to-End Service',
    description: 'Complete project management, from concept to installation.'
  },
  {
    id: 'timely',
    title: 'Timely Delivery',
    description: 'Efficient project timelines to ensure a hassle free experience.'
  }
];

const WhyChoose = ({ locationName = 'Bangalore' }) => {
  const { openModal } = useConsultationModal();

  return (
    <section className="w-full bg-[#383838] py-12 sm:py-15 md:py-18 border-t border-b border-white/10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14">

        {/* 2-Column Exact KariGhars Architecture on bg-[#383838] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ─── LEFT PORTION (5 of 12 Columns) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">

            {/* Headline */}
            <h2 className="font-sans text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.2] mb-4 sm:mb-5 text-center lg:text-left">
              <span className="block">
                <LettersPullUp
                  text="Why Choose Us in"
                  startDelay={0.08}
                  charDelay={0.03}
                  align="responsive-lg"
                />
              </span>
              <span className="block mt-1 sm:mt-1.5">
                <LettersPullUp
                  text={locationName}
                  highlightWord={locationName}
                  highlightClass="text-primary italic"
                  startDelay={0.5}
                  charDelay={0.035}
                  align="responsive-lg"
                />
              </span>
            </h2>

            {/* Paragraph */}
            <FadeUp delay={0.25} duration={0.65}>
              <p className="font-sans text-white/80 text-sm sm:text-base md:text-[16px] leading-relaxed mb-7 sm:mb-8 text-justify px-1 sm:px-0">
                At <strong className="font-semibold text-white">Venetus Interior</strong>, we handle everything from original designs to execution, lifetime warranty, transparent pricing. As one of the top interior design companies in {locationName} we focus on key aspects such as space optimization, quality materials and timely execution to bring your dream space to life.
              </p>
            </FadeUp>

            {/* CTA Button — centered on mobile, left-aligned on desktop */}
            <FadeUp delay={0.4} duration={0.6}>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => openModal({
                    title: `Book a Free Consultation in ${locationName}`,
                    subtitle: 'Our senior architects handle space optimization, quality materials & transparent pricing.'
                  })}
                  className="font-sans inline-block bg-primary hover:bg-primary-hover text-neutral-950 text-sm sm:text-base font-bold tracking-wide px-8 py-3.5 rounded-md transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 active:scale-95 text-center uppercase cursor-pointer"
                >
                  Book A Free Consultation
                </button>
              </div>
            </FadeUp>

          </div>

          {/* ─── RIGHT PORTION (7 of 12 Columns) ─── */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Sub-Column 1: Left column on desktop (has vertical right border on desktop) */}
              <div className="md:border-r-2 md:border-primary/25 md:pr-7 lg:pr-8 flex flex-col justify-between">
                
                {/* 1. Tailored Solutions (Top) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group flex items-start gap-4 pb-6 md:pb-8 border-b-2 border-primary/25 md:border-b-0"
                >
                  <figure className="w-12 h-12 shrink-0 m-0">
                    <img
                      src="/Life-Time-Warranty.png"
                      alt="Tailored Solutions"
                      className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="font-sans text-base sm:text-[17px] font-bold text-white mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {leftColumnData[0].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
                      {leftColumnData[0].description}
                    </p>
                  </div>
                </motion.div>

                {/* 2. Quality Craftsmanship (Bottom) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group flex items-start gap-4 pt-6 md:pt-6 pb-6 md:pb-0 border-b-2 border-primary/25 md:border-b-0 md:border-t-2 md:border-primary/25"
                >
                  <figure className="w-12 h-12 shrink-0 m-0">
                    <img
                      src="/Life-Time-Warranty.png"
                      alt="Quality Craftsmanship"
                      className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="font-sans text-base sm:text-[17px] font-bold text-white mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {leftColumnData[1].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
                      {leftColumnData[1].description}
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Sub-Column 2: Right column on desktop */}
              <div className="md:pl-7 lg:pl-8 flex flex-col justify-between">

                {/* 3. End-to-End Service (Top) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group flex items-start gap-4 pt-6 md:pt-0 pb-6 md:pb-8 border-b-2 border-primary/25 md:border-b-0"
                >
                  <figure className="w-12 h-12 shrink-0 m-0">
                    <img
                      src="/Life-Time-Warranty.png"
                      alt="End-to-End Service"
                      className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="font-sans text-base sm:text-[17px] font-bold text-white mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {rightColumnData[0].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
                      {rightColumnData[0].description}
                    </p>
                  </div>
                </motion.div>

                {/* 4. Timely Delivery (Bottom) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group flex items-start gap-4 pt-6 md:pt-6 pb-6 md:pb-0 border-b-2 border-primary/25 md:border-b-0 md:border-t-2 md:border-primary/25"
                >
                  <figure className="w-12 h-12 shrink-0 m-0">
                    <img
                      src="/Life-Time-Warranty.png"
                      alt="Timely Delivery"
                      className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="font-sans text-base sm:text-[17px] font-bold text-white mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {rightColumnData[1].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
                      {rightColumnData[1].description}
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;

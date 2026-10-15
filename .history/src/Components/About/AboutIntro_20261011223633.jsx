import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
// import { useConsultationModal } from '../../context/ConsultationModalContext' // Uncomment in your project

const AboutIntro = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  
  // const { openModal } = useConsultationModal() // Uncomment in your project

  const ease = [0.25, 0.46, 0.45, 0.94];

  /* ─ Scroll Progress ────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* Parallax effects */
  const rawPortraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const portraitY = useSpring(rawPortraitY, { stiffness: 90, damping: 25 });

  const rawLandscapeX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const landscapeX = useSpring(rawLandscapeX, { stiffness: 90, damping: 25 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fafafa] pt-16 md:pt-24 pb-16 md:pb-28 overflow-hidden relative"
    >
      {/* ── Background Watermark ─ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <svg className="w-full max-w-[1400px] h-auto" viewBox="0 0 1339 604" fill="none" stroke="#D4A53A" strokeWidth="1.2">
          <path d="M50 550 L450 80 L850 80 L1250 550 Z" />
          <path d="M450 80 L450 550" />
          <path d="M850 80 L850 550" />
          <path d="M250 315 L650 315 L1050 315" />
          <path d="M150 430 L550 430 L1150 430" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 md:px-10 relative z-10">
        
        {/* Main Grid Layout instead of raw flex */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ════ LEFT COLUMN (Spans 7 cols on desktop) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Badge */}
            <div className="w-fit inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#cca356]" />
              Started In 2016
            </div>

            {/* Main Heading */}
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-12">
              We Shape <span className="text-[#cca356]">Interior Designs,</span><br className="hidden sm:block" />
              <span className="text-[#cca356]">Crafting Timeless</span> And<br className="hidden sm:block" />
              Inspiring Spaces
            </h2>

            {/* Sub-row: 10 + Years Of Experience + Portrait Image */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 w-full">
              
              {/* Left part: 10 and Text (Stacked) */}
              <div className="flex flex-col items-center sm:items-start shrink-0 pt-4">
                <span className="font-sans text-[160px] md:text-[200px] lg:text-[220px] font-bold text-[#cca356] leading-[0.75] tracking-tighter select-none block">
                  10
                </span>
                <h3 className="font-sans text-lg md:text-[22px] font-bold text-gray-900 leading-[1.3] mt-6 text-center sm:text-left">
                  Years Of<br />Experience
                </h3>
              </div>

              {/* Portrait Image (Fixed Dimensions) */}
              <div className="w-full sm:w-[260px] md:w-[280px] lg:w-[300px] shrink-0">
                <motion.div
                  style={{ y: portraitY }}
                  className="relative w-full h-[350px] md:h-[400px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100 will-change-transform"
                >
                  <img
                    src="/bedroom4.jpeg" /* Make sure path is correct */
                    alt="Interior Portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN (Spans 5 cols on desktop) ════ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col lg:pt-4"
          >
            {/* Landscape Image */}
            <motion.div
              style={{ x: landscapeX }}
              className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100 will-change-transform mb-8"
            >
              <img
                src="/premium.jpg" /* Make sure path is correct */
                alt="Interior Landscape"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Paragraph Text */}
            <p className="font-sans text-base md:text-[17px] text-gray-600 leading-[1.8] mb-8">
              We believe that every space has the power to inspire, and that great design brings
              that inspiration to life. Our mission is to craft environments that stir creativity,
              evoke emotion, and reflect the essence of those who inhabit them.
            </p>

            {/* Contact Us Button */}
            <div>
              <button
                type="button"
                className="group inline-flex items-center gap-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-fit active:scale-95 cursor-pointer"
              >
                <span className="font-sans font-bold text-[15px] text-gray-900">
                  Contact Us
                </span>
                <span className="w-11 h-11 rounded-full bg-[#cca356] text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
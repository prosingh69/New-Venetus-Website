import React, { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const AboutIntro = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const { openModal } = useConsultationModal()

  const ease = [0.25, 0.46, 0.45, 0.94]

  /* ─ Scroll Progress ──────────────────────────────────────
     Targeting the entire section: 0 as it enters, 1 as it leaves
  ───────────────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  /* Left Portrait image container: moves BOTTOM to TOP (+60px -> -60px) */
  const rawPortraitY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const portraitY = useSpring(rawPortraitY, { stiffness: 90, damping: 25 })

  /* Right Landscape image container: moves LEFT to RIGHT (-50px -> +50px) */
  const rawLandscapeX = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const landscapeX = useSpring(rawLandscapeX, { stiffness: 90, damping: 25 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-14 sm:pt-20 md:pt-24 lg:pt-[100px] pb-8 sm:pb-12 md:pb-14 lg:pb-16 overflow-hidden relative"
    >
      {/* ── Background Architectural Watermark Lines ─ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden">
        <svg
          className="w-full max-w-[1400px] h-auto"
          viewBox="0 0 1339 604"
          fill="none"
          stroke="#D4A53A"
          strokeWidth="1.2"
        >
          <path d="M50 550 L450 80 L850 80 L1250 550 Z" />
          <path d="M450 80 L450 550" />
          <path d="M850 80 L850 550" />
          <path d="M250 315 L650 315 L1050 315" />
          <path d="M150 430 L550 430 L1150 430" />
          <rect x="500" y="130" width="300" height="150" />
          <rect x="500" y="340" width="300" height="150" />
          <line x1="100" y1="550" x2="400" y2="180" />
          <line x1="900" y1="180" x2="1200" y2="550" />
        </svg>
      </div>

      <div className="max-w-[1460px] mx-auto px-5 sm:px-8 md:px-10 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8 xl:gap-9 w-full">

          {/* ════ LEFT COLUMN (Fits title perfectly) ════ */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease }}
            className="w-full lg:w-fit shrink-0 flex flex-col order-1"
          >
            {/* Badge */}
            <div className="w-fit inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-surface-soft text-gray-700 text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-5 sm:mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Started In 2024
            </div>

            {/* Main Heading — strictly 3 lines, slightly fine-tuned size */}
            <h2 className="font-sans text-[clamp(22px,5.2vw,28px)] sm:text-[clamp(30px,4.5vw,38px)] md:text-[clamp(36px,3.8vw,44px)] lg:text-[clamp(44px,3.4vw,54px)] xl:text-[56px] font-bold text-gray-900 leading-[1.14] sm:leading-[1.12] lg:leading-[1.08] tracking-tight mb-6 sm:mb-8 lg:mb-10">
              <span className="block whitespace-nowrap">
                We Shape <span className="text-primary font-bold">Interior Designs,</span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="text-primary font-bold">Crafting Timeless</span> And
              </span>
              <span className="block whitespace-nowrap">
                Inspiring Spaces
              </span>
            </h2>

            {/* Sub-row: 10 + Years Of Experience + Portrait Image (centered in sub-row) */}
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full mt-2 sm:mt-3">
              
              {/* Left group: Giant 20 with Cal Sans font and "Projects Completed" directly underneath */}
              <div className="w-fit flex flex-col items-start shrink-0 pt-2 sm:pt-3 lg:pt-4">
                <span
                  style={{ fontFamily: "'Cal Sans', sans-serif" }}
                  className="font-calsans text-[170px] sm:text-[230px] md:text-[280px] lg:text-[320px] xl:text-[360px] font-normal text-primary leading-[0.82] tracking-tight select-none block text-left"
                >
                  20
                </span>
                
                {/* Words placed directly under 20 (aligned under the zero) */}
                <h3 className="font-sans text-base sm:text-lg md:text-[20px] lg:text-[22px] font-bold text-gray-900 leading-[1.2] text-left self-end mr-1 sm:mr-3 mt-1 sm:mt-2 shrink-0">
                  Projects<br />Completed
                </h3>
              </div>

              {/* Portrait Image Container — centered horizontally between 10 and right column, height trimmed from bottom */}
              <div className="w-full sm:w-[200px] md:w-[230px] lg:w-[255px] xl:w-[270px] shrink-0 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-36">
                <motion.div
                  style={{ y: portraitY }}
                  className="relative w-full h-[265px] sm:h-[290px] md:h-[315px] lg:h-[335px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl bg-gray-100 will-change-transform"
                >
                  <img
                    src="/bedroom3.jpeg"
                    alt="Venetus Interior Craftsmanship"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN (Fills remaining width with clean gap) ════ */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.2 }}
            className="w-full lg:flex-1 flex flex-col order-2 lg:pt-2 min-w-0"
          >
            {/* Landscape/Horizontal Image (stretches to fill right side) */}
            <motion.div
              style={{ x: landscapeX }}
              className="relative w-full h-[260px] sm:h-[330px] lg:h-[405px] xl:h-[445px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl bg-gray-100 will-change-transform mb-7 sm:mb-8"
            >
              <img
                src="/premium.jpg"
                alt="Venetus Interior Living Room"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Paragraph */}
            <p className="font-sans text-[15px] sm:text-[16px] text-gray-600 leading-[1.7] max-w-[475px] mb-7 sm:mb-9">
              We believe that every space has the power to inspire, and that great design brings
              that inspiration to life. Our mission is to craft environments that stir creativity,
              evoke emotion, and reflect the essence of those who inhabit them.
            </p>

            {/* Contact Us Button */}
            <div>
              <button
                type="button"
                onClick={() =>
                  openModal({
                    title: 'Book a Free Design Consultation',
                    subtitle:
                      'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.',
                  })
                }
                className="group inline-flex items-center gap-3.5 bg-white hover:bg-primary text-gray-900 border border-gray-200/90 hover:border-primary pl-6 pr-2 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-fit active:scale-95 cursor-pointer"
              >
                <span className="font-sans font-semibold text-sm sm:text-[15px] tracking-wide text-gray-900 group-hover:text-white transition-colors duration-300">
                  Contact Us
                </span>
                <span className="w-10 h-10 rounded-full bg-primary group-hover:bg-white text-white group-hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                  <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutIntro
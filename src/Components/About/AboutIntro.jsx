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
      className="w-full bg-[#121214] pt-14 sm:pt-20 md:pt-24 lg:pt-[100px] pb-12 sm:pb-16 md:pb-20 border-t border-b border-white/10 overflow-hidden relative text-white"
    >
      {/* ── Background Ambient Light ─ */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* ── Background Architectural Watermark Lines ─ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center overflow-hidden">
        <svg
          className="w-full max-w-[1400px] h-auto"
          viewBox="0 0 1339 604"
          fill="none"
          stroke="var(--primary)"
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
            className="w-full lg:w-fit shrink-0 flex flex-col order-1 items-center sm:items-start"
          >
            {/* Badge */}
            <div className="w-fit inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/35 bg-primary/10 text-primary font-body text-label-caps tracking-[0.2em] uppercase mb-5 sm:mb-6 shadow-xs mx-auto sm:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Started In 2023
            </div>

            {/* Main Heading — strictly 3 lines, luxury font-heading */}
            <h2 className="font-heading text-h2 font-medium text-white leading-[1.15] tracking-[-0.02em] mb-6 sm:mb-8 lg:mb-10 text-center sm:text-left text-balance">
              <span className="block whitespace-nowrap">
                We Shape <span className="text-[#E9C27A] italic font-heading font-medium">Interior Designs,</span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="text-[#E9C27A] italic font-heading font-medium">Crafting Timeless</span> And
              </span>
              <span className="block whitespace-nowrap">
                Inspiring Spaces
              </span>
            </h2>

            {/* Sub-row: 40 + Projects Completed + Portrait Image */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full mt-2 sm:mt-3">
              
              {/* Left group: Giant 40 with Cormorant font and "Projects Completed" directly underneath */}
              <div className="w-fit flex flex-col items-center sm:items-start shrink-0 pt-2 sm:pt-3 lg:pt-4 mx-auto sm:mx-0">
                <span
                  className="font-heading text-[170px] sm:text-[230px] md:text-[280px] lg:text-[320px] xl:text-[360px] font-normal text-primary leading-[0.82] tracking-tight select-none block text-center sm:text-left"
                >
                  40
                </span>
                
                {/* Words placed directly under 20 (centered on mobile, under zero on desktop) */}
                <h3 className="font-heading text-base sm:text-lg md:text-[20px] lg:text-[22px] font-medium text-white leading-[1.25] text-center sm:text-left sm:self-end sm:mr-1 lg:mr-3 mt-2 sm:mt-2 shrink-0">
                  <span className="sm:hidden">Projects Completed</span>
                  <span className="hidden sm:inline">Projects<br />Completed</span>
                </h3>
              </div>

              {/* Portrait Image Container — centered horizontally, tall portrait on mobile, tailored height on desktop */}
              <div className="w-full max-w-[330px] sm:max-w-none sm:w-[200px] md:w-[230px] lg:w-[255px] xl:w-[270px] shrink-0 mx-auto sm:mx-0 mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-36">
                <motion.div
                  style={{ y: portraitY }}
                  className="relative w-full h-[370px] sm:h-[290px] md:h-[315px] lg:h-[335px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 will-change-transform"
                >
                  <img
                    src="/bedroom3.jpeg"
                    alt="Venetus Interior Craftsmanship"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* ════ RIGHT COLUMN (Fills remaining width with clean gap) ════ */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease, delay: 0.2 }}
            className="w-full lg:flex-1 flex flex-col order-2 lg:pt-2 min-w-0 items-center sm:items-start text-center sm:text-left"
          >
            {/* Landscape/Horizontal Image (stretches to fill right side) */}
            <motion.div
              style={{ x: landscapeX }}
              className="relative w-full h-[260px] sm:h-[330px] lg:h-[405px] xl:h-[445px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 will-change-transform mb-7 sm:mb-8"
            >
              <img
                src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792114836/WhatsApp_Image_2026-10-15_at_9.02.19_PM_pxaygu.jpg"
                alt="Venetus Interior Living Room"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Paragraph */}
            <p className="font-body text-[15.5px] md:text-[16.5px] font-[400] text-[#D4D4D8] md:text-[#D1D1D1] leading-[1.7] tracking-[-0.01em] max-w-[55ch] text-pretty mb-7 sm:mb-9 text-center sm:text-left mx-auto sm:mx-0">
              We believe that every space has the power to inspire, and that great design brings
              that inspiration to life. Our mission is to craft environments that stir creativity,
              evoke emotion, and reflect the essence of those who inhabit them.
            </p>

            {/* Contact Us Button */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={() =>
                  openModal({
                    title: 'Book a Free Design Consultation',
                    subtitle:
                      'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.',
                  })
                }
                className="font-body btn-text font-semibold text-neutral-950 bg-primary hover:bg-primary-hover px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 active:scale-95 cursor-pointer inline-flex items-center gap-3"
              >
                <span>Book A Free Consultation</span>
                <span className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
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
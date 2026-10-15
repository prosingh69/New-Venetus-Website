import React, { useRef } from 'react'
import { ArrowRight, Shield, Home, Award } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'

/* ── Stat Card ─────────────────────────────────────────── */
const StatCard = ({ value, label, icon: Icon, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, ease: 'easeOut', delay }}
    className="flex flex-col items-center sm:items-start gap-0.5 px-4 sm:px-5 py-3 sm:py-0 border border-gray-100 sm:border-0 rounded-xl sm:rounded-none bg-gray-50 sm:bg-transparent flex-1"
  >
    <div className="flex items-center gap-1.5 mb-0.5">
      <Icon className="w-3.5 h-3.5 text-primary" />
      <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-none">{value}</span>
    </div>
    <span className="text-[11px] sm:text-xs text-gray-500 font-medium text-center sm:text-left leading-snug">{label}</span>
  </motion.div>
)

/* ── AboutIntro ────────────────────────────────────────── */
const AboutIntro = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })
  const { openModal } = useConsultationModal()

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">

          {/* ── LEFT: Asymmetric Image Collage ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="relative w-full order-2 lg:order-1"
          >
            {/* Grid layout: tall image left + two stacked on right */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[420px] sm:h-[500px] md:h-[560px] lg:h-[600px]">

              {/* Left — Tall hero image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl row-span-2">
                <img
                  src="/bedroom4.jpeg"
                  alt="Venetus Interior — Bedroom Design"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent rounded-b-2xl sm:rounded-b-3xl pointer-events-none" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    Bedroom Design
                  </span>
                </div>
              </div>

              {/* Right top — Kitchen/Dining */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src="/kitchen1.jpeg"
                  alt="Venetus Interior — Dining & Kitchen"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 to-transparent rounded-b-2xl sm:rounded-b-3xl pointer-events-none" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    Dining Space
                  </span>
                </div>
              </div>

              {/* Right bottom — Living room */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src="/premium.jpg"
                  alt="Venetus Interior — Living Room"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 to-transparent rounded-b-2xl sm:rounded-b-3xl pointer-events-none" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    Living Room
                  </span>
                </div>
              </div>
            </div>

            {/* Floating years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'backOut', delay: 0.65 }}
              className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 lg:-top-6 lg:-right-5 bg-primary text-white rounded-2xl sm:rounded-[20px] px-4 py-3 sm:px-5 sm:py-4 shadow-xl shadow-primary/30 flex flex-col items-center leading-none z-10"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">12+</span>
              <span className="text-[10px] sm:text-[11px] font-medium opacity-90 mt-0.5 tracking-wide">Years of</span>
              <span className="text-[10px] sm:text-[11px] font-medium opacity-90 tracking-wide">Excellence</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Brand Story + Stats + CTA ───────── */}
          <div className="flex flex-col justify-center order-1 lg:order-2">

            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
              className="mb-4 sm:mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Our Story — Est. 2012, Bangalore
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
              className="font-sans text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-4 sm:mb-5"
            >
              Turning Spaces Into{' '}
              <span className="text-primary italic font-serif font-normal">Stories</span>{' '}
              Since 2012
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="text-gray-500 text-sm sm:text-[15px] md:text-base leading-relaxed mb-6 sm:mb-7 max-w-lg"
            >
              At <strong className="text-gray-800 font-semibold">Venetus Interior</strong>, every home we craft is a reflection of the people who live in it. We blend architectural precision, bespoke craftsmanship, and your unique lifestyle — delivering interiors backed by up to a{' '}
              <strong className="text-gray-800 font-semibold">10-year warranty</strong>.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="w-12 h-0.5 bg-primary mb-6 sm:mb-7 origin-left"
            />

            {/* Stats Row */}
            <div className="flex items-stretch gap-3 sm:gap-0 sm:divide-x sm:divide-gray-200 mb-8 sm:mb-10">
              <StatCard value="12+" label="Years of Experience" icon={Award} delay={0.45} isInView={isInView} />
              <StatCard value="20+" label="Homes Completed" icon={Home} delay={0.55} isInView={isInView} />
              <StatCard value="10yr" label="Warranty Backed" icon={Shield} delay={0.65} isInView={isInView} />
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.75 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <button
                type="button"
                onClick={() => openModal({
                  title: 'Book a Free Design Consultation',
                  subtitle: 'Talk with our senior design architects to plan your layout, 3D designs, and exact budget.'
                })}
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-sm py-3.5 px-7 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </button>

              <NavLink
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary/40 text-gray-800 hover:text-primary font-semibold text-sm py-3.5 px-7 rounded-full transition-all duration-300 active:scale-95"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </NavLink>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutIntro


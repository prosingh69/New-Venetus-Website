import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { ShieldCheck, Layers, Sparkles, CheckCircle2 } from 'lucide-react'

const coreValues = [
  {
    icon: ShieldCheck,
    label: 'Transparency',
    desc: 'No hidden costs — clear pricing from day one.',
  },
  {
    icon: Layers,
    label: 'Quality',
    desc: 'German fittings, in-house factory & 10-yr warranty.',
  },
  {
    icon: Sparkles,
    label: 'Aesthetics',
    desc: 'Modern, timeless spaces crafted around how you live.',
  },
  {
    icon: CheckCircle2,
    label: 'Execution',
    desc: 'End-to-end turnkey delivery — we handle everything.',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94]

const AboutStory = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const rawImgY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imgY = useSpring(rawImgY, { stiffness: 80, damping: 22 })

  const rawBackImgY = useTransform(scrollYProgress, [0, 1], [25, -25])
  const backImgY = useSpring(rawBackImgY, { stiffness: 70, damping: 20 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ── Full-bleed background image ── */}
      <img
        src="/bedroom4.jpeg"
        alt="Venetus Interior Design — Background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.06] pointer-events-none select-none"
        loading="lazy"
      />

      {/* ── Cinematic dark overlays ── */}
      {/* Base darkness */}
      <div className="absolute inset-0 bg-black/72 pointer-events-none" />
      {/* Left-heavy gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25 pointer-events-none" />
      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      {/* Top fade-in */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

      {/* ── Gold horizontal rule (top accent) ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />

      {/* ── Architectural SVG watermark ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center overflow-hidden">
        <svg
          className="w-full max-w-[1400px] h-auto"
          viewBox="0 0 1339 604"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
        >
          <path d="M60 560 L460 80 L860 80 L1260 560 Z" />
          <path d="M460 80 L460 560" />
          <path d="M860 80 L860 560" />
          <path d="M260 320 L660 320 L1060 320" />
          <rect x="510" y="140" width="290" height="140" />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[1420px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16 xl:gap-20">

          {/* ════ LEFT: Text Content ════ */}
          <div className="w-full lg:w-[52%] flex flex-col items-center sm:items-start">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="w-fit inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/35 bg-primary/10 text-primary font-body text-label-caps tracking-[0.2em] uppercase mb-6 sm:mb-7 mx-auto sm:mx-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Story
            </motion.div>

            {/* Heading — strictly 2 lines on desktop, luxury font-heading */}
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="font-heading text-h2 font-medium text-white leading-[1.12] tracking-[-0.02em] mb-5 sm:mb-6 text-center sm:text-left text-balance"
            >
              <span className="block sm:whitespace-nowrap">
                Born in Bangalore,
              </span>
              <span className="block sm:whitespace-nowrap text-[#E9C27A] italic font-medium">
                Built for Your Home.
              </span>
            </motion.h2>

            {/* Gold decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.35, ease: 'easeOut' }}
              className="w-14 h-0.5 bg-primary mb-5 sm:mb-6 mx-auto sm:mx-0 origin-center sm:origin-left"
            />

            {/* Paragraphs — luxury body font, max 65ch length */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.38, ease }}
              className="w-full font-body text-body-normal text-[#CCCCCC] leading-[1.7] mb-4 text-pretty max-w-[65ch] text-center sm:text-left mx-auto sm:mx-0 px-2 sm:px-0"
            >
              Started in 2023, our journey began with a simple mission: to bring affordable luxury interior design to Bangalore homes without compromising on quality or transparency.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.48, ease }}
              className="w-full font-body text-body-normal text-[#CCCCCC] leading-[1.7] mb-9 sm:mb-10 text-pretty max-w-[65ch] text-center sm:text-left mx-auto sm:mx-0 px-2 sm:px-0"
            >
              We have completed{' '}
              <span className="text-primary font-semibold">40+ projects</span> and
              currently have{' '}
              <span className="text-primary font-semibold">5+ ongoing projects</span>,
              earning the trust of families across Bangalore. Today, our team of expert
              designers continues to innovate — staying true to our core values.
            </motion.p>

            {/* Core Values Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {coreValues.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.55 + i * 0.09, ease }}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/25 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: Image Stack (shifted slightly left with breathing gap on right) ════ */}
          <div className="w-full lg:w-[48%] relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:mr-6 xl:mr-10">

            {/* Back image — tilted, parallax */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 4 } : {}}
              transition={{ duration: 0.85, delay: 0.25, ease }}
              style={{ y: backImgY }}
              className="absolute top-0 right-4 sm:right-6 lg:right-7 w-[68%] h-[300px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-white/10"
            >
              <img
                src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792114827/WhatsApp_Image_2026-10-15_at_9.01.25_PM_amjmpz.jpg"
                alt="Venetus Interior Bedroom Project"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Dark overlay on back image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </motion.div>

            {/* Front main image — parallax */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              style={{ y: imgY }}
              className="relative z-10 w-[68%] h-[320px] sm:h-[390px] md:h-[440px] mt-20 sm:mt-24 lg:mt-28 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/15 mr-4 sm:mr-6 lg:mr-7"
            >
              <img
                src="https://res.cloudinary.com/lbei6xmb/image/upload/v1792114837/WhatsApp_Image_2026-10-15_at_9.02.22_PM_aroot0.jpg"
                alt="Venetus Interior — Our Story"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Cinematic dark overlay on front image */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Floating caption chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                <div className="px-3 py-2 rounded-lg bg-black/65 backdrop-blur-sm border border-white/12">
                  <p className="text-white text-[11px] font-semibold leading-none mb-0.5">Venetus Interior</p>
                  <p className="text-primary text-[10px] leading-none">Est. 2023 · Bangalore</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Floating stat card — top-left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-4 sm:top-6 left-0 lg:left-[-8px] px-4 py-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/14 shadow-xl z-20"
            >
              <p className="text-primary font-bold text-xl leading-none mb-0.5">40+</p>
              <p className="text-white/65 text-[11px] leading-tight">Projects Done</p>
            </motion.div>

            {/* Floating stat card — mid-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.82, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-24 sm:bottom-28 right-2 sm:right-4 lg:right-3 px-4 py-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/14 shadow-xl z-20"
            >
              <p className="text-primary font-bold text-xl leading-none mb-0.5">5+</p>
              <p className="text-white/65 text-[11px] leading-tight">Ongoing Projects</p>
            </motion.div>

            {/* Gold decorative rings */}
            <div className="absolute bottom-8 right-10 sm:right-14 w-24 h-24 rounded-full border border-primary/15 pointer-events-none" />
            <div className="absolute bottom-14 right-16 sm:right-20 w-12 h-12 rounded-full border border-primary/10 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* ── Gold bottom rule ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
    </section>
  )
}

export default AboutStory

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Eye, Sparkles, CheckCircle2 } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Master Craftsmanship',
    subtitle: 'Factory-Grade Precision',
    description:
      'We combine architectural planning with precision German-machinery manufacturing. No on-site cutting mess or rough edges—only flawless bespoke finishes.',
    highlights: ['German-machined panels', 'High-density moisture-resistant ply', 'Laser edge banding'],
  },
  {
    icon: Eye,
    title: 'Zero Hidden Fees',
    subtitle: '100% Price Transparency',
    description:
      'Detailed itemized BOQs with zero last-minute surprises. The quote you approve is what you pay—complete honesty from concept to handover.',
    highlights: ['Itemized BOQ breakdown', 'Direct factory pricing', 'No price escalation midway'],
  },
  {
    icon: ShieldCheck,
    title: '10-Year Warranty',
    subtitle: 'Enduring Quality',
    description:
      'Our confidence in hardware and materials is backed by comprehensive warranties up to 10 years, supported by dedicated prompt after-care.',
    highlights: ['Branded hardware (Hafele/Blum)', 'Post-handover maintenance', 'Dedicated service manager'],
  },
]

const AboutValues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="w-full bg-[#0d0d0d] text-white py-16 sm:py-20 md:py-24 relative overflow-hidden border-t border-b border-white/10">
      {/* Subtle ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase mb-3 sm:mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Core Principles
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4"
          >
            Built on Trust, Crafted for <span className="text-primary italic font-serif font-normal">Generations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed px-2"
          >
            We don’t believe in temporary trends or shortcuts. Every home we take on is rooted in three non-negotiable promises.
          </motion.p>
        </div>

        {/* 3 Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + idx * 0.12 }}
                className="group relative bg-[#141414] hover:bg-[#181818] border border-white/10 hover:border-primary/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Header */}
                  <span className="text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutValues


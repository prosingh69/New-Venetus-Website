import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Palette, Cpu, KeyRound } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Lightbulb,
    title: 'Consult & Layout',
    desc: 'In-depth consultation, space assessment, and lifestyle requirement mapping.',
  },
  {
    step: '02',
    icon: Palette,
    title: '3D Visuals & BOQ',
    desc: 'Photorealistic 3D renders, physical finish swatches, and finalized fixed-price budget.',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Factory Precision',
    desc: 'German-machinery manufacturing with laser edge-banding and strict QA checks.',
  },
  {
    step: '04',
    icon: KeyRound,
    title: 'Flawless Handover',
    desc: 'Dust-free assembly, deep cleaning, and formal 10-year warranty handover.',
  },
]

const AboutProcessStrip = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase mb-3"
          >
            Structured Execution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            How We Bring Your Vision to Life
          </motion.h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + idx * 0.12 }}
                className="group relative bg-[#fbf9f5] hover:bg-white border border-gray-200/80 hover:border-primary/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif italic text-2xl sm:text-3xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <span>Phase {idx + 1}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500 font-normal">Strict Timelines</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutProcessStrip


import React from 'react'
import ClientTrust from './ClientTrust'
import { motion } from 'framer-motion'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'

const familyData = [
  {
    id: 1,
    Title: "Transparent Communication",
    Para: "We keep you updated at every step. No surprises, only honest conversations."
  },
  {
    id: 2,
    Title: "Quality Guarantee",
    Para: (
      <>
        Premium materials and expert craftsmanship backed by <span className="font-body font-sans lining-nums font-semibold text-[#E9C27A]">10</span>-year warranty.
      </>
    )
  },
  {
    id: 3,
    Title: "On-Time Delivery",
    Para: (
      <>
        We respect your time. <span className="font-body font-sans lining-nums font-semibold text-[#E9C27A]">100%</span> on-time delivery record with guaranteed <span className="font-body font-sans lining-nums font-semibold text-[#E9C27A]">45</span>-day handover.
      </>
    )
  },
  {
    id: 4,
    Title: "Fair Pricing",
    Para: "Transparent quotes with no hidden costs. You know exactly what you're paying for."
  },
  {
    id: 5,
    Title: "Expert Team",
    Para: "Certified designers with specialized experience in Bangalore luxury apartments."
  },
  {
    id: 6,
    Title: "Post-Project Support",
    Para: (
      <>
        Ongoing support and maintenance for <span className="font-body font-sans lining-nums font-semibold text-[#E9C27A]">10</span> years after project completion.
      </>
    )
  }
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const WhyUs = () => {
  return (
    <section className='w-full bg-[#121214] py-16 sm:py-20 md:py-24 border-b border-white/[0.08] text-white relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-14'>
          <h2 className='font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-3'>
            <LettersPullUp
              text="Why Families Trust Venetus"
              highlightWord="Venetus"
              highlightClass="text-[#E9C27A] italic font-heading font-medium"
              startDelay={0.08}
              charDelay={0.03}
              align="center"
            />
          </h2>
          <FadeUp delay={0.3} duration={0.6}>
            <p className='font-body text-xs sm:text-sm text-[#AAAAAA] max-w-xl mx-auto'>
              Uncompromising design integrity, transparent execution, and lifelong support for luxury Bangalore homes.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {familyData.map((data) => (
            <motion.div key={data.id} variants={itemVariants}>
              <ClientTrust Title={data.Title} Para={data.Para} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs

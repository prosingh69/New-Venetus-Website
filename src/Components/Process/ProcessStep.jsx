import React from 'react'
import ProcessCard from './ProcessCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const processData = [
  { id:"01", Name:"Initial Consultation",  Para:"Free consultation to understand your vision, requirements, and budget. We discuss your lifestyle and preferences.", Duration:"1-2 hours" },
  { id:"02", Name:"Design & Planning",     Para:"Our designers create detailed 3D renderings and floor plans. We present multiple options and refine based on feedback.", Duration:"1-2 weeks" },
  { id:"03", Name:"Material Selection",    Para:"Choose from premium materials with transparent pricing. We provide detailed specifications and warranty information.", Duration:"1 week" },
  { id:"04", Name:"Project Execution",     Para:"Our skilled team handles all work with regular updates. Quality checks at each stage ensure perfection.", Duration:"4-8 weeks" },
  { id:"05", Name:"Final Handover",        Para:"Complete walkthrough, testing of all systems, and final adjustments. You receive warranty documentation.", Duration:"1 day" },
  { id:"06", Name:"Post-Project Support",  Para:"We provide 10-year warranty and ongoing support for any maintenance or adjustments needed.", Duration:"Ongoing" },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const ProcessStep = () => {
  return (
    <section className='w-full py-12 sm:py-16 md:py-20 bg-[#F9F8F8]'>
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14">
        <FadeUp delay={0.05} duration={0.65}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-balance px-2'>
            6-Step Design & Execution Process
          </h2>
        </FadeUp>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mt-6 sm:mt-8'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {processData.map((Data) => (
            <ProcessCard
              key={Data.id}
              id={Data.id}
              Name={Data.Name}
              Para={Data.Para}
              Duration={Data.Duration}
              motionVariants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessStep

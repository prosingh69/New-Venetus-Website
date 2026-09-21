import React from 'react'
import WhyServiceCard from './WhyServiceCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const whyServiceData = [
  { id:1, Title:"Bangalore Expertise",   Para:"We understand the unique challenges and opportunities of Bangalore apartments, from space constraints to local climate considerations." },
  { id:2, Title:"Transparent Pricing",   Para:"No hidden costs. We provide detailed quotes upfront and stick to our budgets. Material brands and grades are clearly specified." },
  { id:3, Title:"Quality Materials",     Para:"We partner with certified suppliers and use premium materials that are built to last. Every product comes with warranty." },
  { id:4, Title:"On-Time Delivery",      Para:"Our project management ensures your home is ready when promised. We've maintained 100% on-time delivery for 15+ years." },
  { id:5, Title:"Professional Team",     Para:"Our designers are certified professionals with years of experience in luxury interior design and space optimization." },
  { id:6, Title:"10-Year Warranty",      Para:"We stand behind our work with a comprehensive 10-year warranty on all installations and materials." },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const WhyService = () => {
  return (
    <section className='w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14'>
        <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-balance'>
          Why Choose Our Services
        </h2>
      </FadeUp>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {whyServiceData.map((Data, index) => (
          <WhyServiceCard key={index} Data={Data} motionVariants={cardVariants} />
        ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyService

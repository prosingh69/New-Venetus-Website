import React from 'react'
import WhyCard from './WhyCard'
import { Award, CheckCircle, Users, Zap, Shield } from "lucide-react"
import { motion } from 'framer-motion'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'

const featuresData = [
  { id: 1, icon: Award,        title: "Premium Materials",   description: "We use certified brands and transparent material specifications for every project." },
  { id: 2, icon: CheckCircle,  title: "Transparent Process", description: "From design to handover, we keep you informed at every step with regular updates." },
  { id: 3, icon: Users,        title: "Expert Team",         description: "Our designers specialize in Bangalore apartment layouts and local preferences." },
  { id: 4, icon: Zap,          title: "Fast Execution",      description: "Efficient project management ensures your home is ready on schedule." },
  { id: 5, icon: Shield,       title: "Warranty Backend",    description: "10-year warranty on all work gives you complete peace of mind." },
  { id: 6, icon: CheckCircle,  title: "Proven Track Record", description: "4.9/5 rating from 500+ happy families across Bangalore." },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

const WhyChoose = () => {
  return (
    <section className='w-full bg-[#F9F8F8] py-12 sm:py-16 md:py-24'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14'>

        <div className='flex flex-col items-center justify-center text-center mb-8 sm:mb-12 md:mb-16 px-2'>
          <h2 className='text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-bold mb-3 md:mb-4 text-gray-900 text-center text-balance leading-tight'>
            <LettersPullUp text="Why Choose Us" startDelay={0.1} align="center" />
          </h2>
          <FadeUp delay={0.4} duration={0.6}>
            <p className='text-base sm:text-lg lg:text-xl text-[#6E4C40] max-w-2xl text-pretty text-center'>
              We build trust through transparency, quality, and exceptional service.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featuresData.map((feature) => (
            <WhyCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              motionVariants={cardVariants}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChoose

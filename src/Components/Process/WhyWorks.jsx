import React from 'react'
import WhyWorkCard from './WhyWorkCard'
import { NotepadText, CheckCheck, Timer, HandCoins, Phone, ShieldUser } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const WhyWorkData = [
  { id:1, Badge: NotepadText, Name:"Transparency",       Para:"Every step is documented. You know exactly what materials are used and why." },
  { id:2, Badge: CheckCheck,  Name:"Quality Control",    Para:"Multiple quality checks ensure perfection at each stage of execution." },
  { id:3, Badge: Timer,       Name:"Timeline Guarantee", Para:"We commit to delivery dates and have maintained 100% on-time delivery for 15+ years." },
  { id:4, Badge: HandCoins,   Name:"Budget Adherence",   Para:"No hidden costs. We provide detailed quotes and stick to budget." },
  { id:5, Badge: Phone,       Name:"Regular Updates",    Para:"Weekly progress updates keep you informed throughout the project." },
  { id:6, Badge: ShieldUser,  Name:"Warranty Backed",    Para:"10-year comprehensive warranty on all work and materials." },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

const WhyWorks = () => {
  return (
    <section className='bg-[#F9F8F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
      <div className="max-w-7xl mx-auto">
        <FadeUp delay={0.05} duration={0.65}>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-balance px-2'>
            Why Our Process Works
          </h2>
        </FadeUp>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {WhyWorkData.map((Data) => (
            <WhyWorkCard key={Data.id} Badge={Data.Badge} Name={Data.Name} Para={Data.Para} motionVariants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyWorks

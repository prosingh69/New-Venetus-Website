import React from 'react'
import TeamCard from './TeamCard'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 250, damping: 22 },
  },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const MeetTeam = () => {
  const TeamMemberData = [
    {
      id: 1,
      Profile: "https://randomuser.me/api/portraits/men/32.jpg",
      Name: "Abhinay Singh",
      Profession: "Designer",
      Detail: "Expert in luxury interior styling and space planning. Specializes in modern and contemporary designs."
    },
    {
      id: 2,
      Profile: "https://res.cloudinary.com/lbei6xmb/image/upload/v1791044677/Gemini_Generated_Image_v7j1l3v7j1l3v7j1-clean_cxv1ml.png",
      Name: "Yashwanth J",
      Profession: "Founder",
      Detail: "Visionary founder driving Venetus Interior with a commitment to quality craftsmanship, modern aesthetics, and seamless execution."
    },
    {
      id: 3,
      Profile: "https://randomuser.me/api/portraits/women/44.jpg",
      Name: "Priya Patel",
      Profession: "Design Planner",
      Detail: "Expert in spatial planning and functional layouts. Maximizes utility without compromising style."
    }
  ]

  return (
    <section className='w-full bg-[#0A0A0B] py-16 sm:py-20 md:py-24 border-t border-b border-white/10 text-white relative overflow-hidden'>
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E9C27A]/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-14 flex flex-col items-center relative z-10'>
        <FadeUp delay={0.05} duration={0.65}>
          <h2 className="font-heading text-h2 font-medium text-white tracking-[-0.02em] leading-[1.15] mb-4 text-center text-balance">
            The Creative Minds Behind <span className="text-[#E9C27A] italic font-heading font-medium">Venetus Interior</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.18} duration={0.6}>
          <p className="font-body text-[15.5px] md:text-[16.5px] font-[400] text-[#D4D4D8] md:text-[#D1D1D1] leading-[1.7] tracking-[-0.01em] mb-10 sm:mb-14 text-center text-pretty max-w-[680px] mx-auto px-2">
            Dedicated designers, planners & craftsmen turning your Bangalore spaces into personalized works of art.
          </p>
        </FadeUp>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl'
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TeamMemberData.map((data, index) => (
            <TeamCard
              key={data.id}
              data={data}
              motionVariants={cardVariants}
              isFeatured={index === 1}
              isBlurred={index !== 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTeam

